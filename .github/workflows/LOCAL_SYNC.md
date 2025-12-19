@'
## Locales Sync — configuration & testing

This workflow synchronizes the `locales/` directory from a source repository into this repository and opens a Pull Request with changes.

Required repository secrets (set in this repo):
- `PERSONAL_ACCESS_TOKEN` — a personal access token with `repo` scope (or at least read access to the source repo and write access to this repo). Used to checkout the source repo and push branches.
- `SOURCE_REPOSITORY` — the source repository full name (owner/name), e.g. your-org/translations-repo.
- `DIRECT_PUSH` — optional. Set to `true` to push directly to the source repo default branch (no PR). Default is off.

Behavior:
- The action checks out the source repo to `source/`, rsyncs `source/locales/` into `./locales/`, and if there are changes it creates a branch and opens a Pull Request.
- A reverse sync workflow runs on pushes to `locales/**` in this repo; it waits for checks to succeed, then either creates a PR in the source repo or (if `DIRECT_PUSH=true`) pushes directly to the source repo default branch.
- Runs on a daily schedule and can be triggered manually via `workflow_dispatch`.

How to test manually:
1. Add the required secrets in Settings → Secrets and variables → Actions.
2. Commit and push these files (see commands below).
3. For forward sync: run the `Sync locales from source repository` workflow via Actions → Run workflow.
4. For reverse sync: make a small change under `locales/`, push it, and wait for the reverse workflow to run (it will create a PR or push depending on `DIRECT_PUSH`).

Warnings:
- Direct pushing bypasses PR review and may be blocked by branch protection rules. Use with caution.

'@ > .github\LOCAL_SYNC.md