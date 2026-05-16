# port to supabase: migration guide

## current backend dependencies

the project is a static astro site. it has no backend. all content lives in astro components and markdown files. there is no database, no authentication, and no server-side logic.

## what supabase would provide

if the project needs dynamic features in the future, supabase can handle:

| current need | supabase equivalent | notes |
|---|---|---|
| user accounts | supabase auth (email/password) | no custom auth tables needed |
| persistent data | supabase postgres | row level security required on every table |
| file uploads | supabase storage | for user-submitted images or attachments |
| server logic | supabase edge functions | deno-based, no cold starts |
| real-time updates | supabase realtime | for collaborative features |

## required database schema

no schema exists yet. if dynamic features are added, the following tables would be needed:

### profiles

```sql
create table profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null default '',
  created_at timestamptz not null default now()
);
alter table profiles enable row level security;
create policy "users can read own profile" on profiles for select to authenticated using (auth.uid() = id);
create policy "users can update own profile" on profiles for update to authenticated using (auth.uid() = id) with check (auth.uid() = id);
```

### bookmarks (if users can save guides)

```sql
create table bookmarks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  guide_slug text not null,
  created_at timestamptz not null default now()
);
alter table bookmarks enable row level security;
create policy "users can read own bookmarks" on bookmarks for select to authenticated using (auth.uid() = user_id);
create policy "users can insert own bookmarks" on bookmarks for insert to authenticated with check (auth.uid() = user_id);
create policy "users can delete own bookmarks" on bookmarks for delete to authenticated using (auth.uid() = user_id);
```

## authentication migration

no auth exists currently. to add it:

1. install `@supabase/supabase-js`
2. create a singleton client in `src/lib/supabase.ts`
3. add login/register pages using `supabase.auth.signUp()` and `supabase.auth.signInWithPassword()`
4. email confirmation is disabled by default; do not enable it unless explicitly requested
5. wrap protected routes with an auth check component

## server logic migration

no server logic exists. if needed:

1. create edge functions in `supabase/functions/`
2. deploy using the supabase mcp tools (not the cli)
3. always include cors headers in every function
4. use `npm:` or `jsr:` specifiers for external dependencies
5. never use bare specifiers or `deno.land/x` imports

## limitations and differences

- the site is currently fully static. adding supabase makes it hybrid (static + dynamic)
- supabase edge functions run deno, not node. some node apis are unavailable
- row level security is mandatory on every table. no exceptions
- the free tier has limits on database size, bandwidth, and function invocations
- edge functions have a 150mb memory limit and 150s timeout
