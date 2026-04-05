---
name: template-update
description: Cherry-pick updates from the upstream SvelteKit blog starter template. Use when the user wants to check for or pull in upstream template changes, sync with the starter repo, or says "template update" or "check upstream".
---

# Template Update

This repo was copied (not forked) from `josh-collinsworth/sveltekit-blog-starter` at commit `9c34445` ("Update to Svelte 5"). The git histories are completely disconnected — there is no common ancestor. This means merge and rebase will not work. Only cherry-pick works here.

## Known divergences from upstream

- `src/routes/blog/` was renamed to `src/routes/articles/` in this repo
- Git's rename detection handles this during cherry-pick, but verify after each pick

## Workflow

### 1. Add the upstream remote

```bash
git remote add upstream git@github.com:josh-collinsworth/sveltekit-blog-starter.git
git fetch upstream
```

### 2. Show what's new

Show the user the upstream commits since the last known sync point. Start from the commit after the last cherry-picked one. If unsure which commits have already been picked, compare file contents or check commit messages in local history for "Cherry-picked from upstream" references.

```bash
git log upstream/main --oneline
```

Present the commits and let the user choose which to cherry-pick. Don't pick anything without their input.

### 3. Cherry-pick with `--no-commit`

Always use `--no-commit` so changes can be reviewed before committing.

```bash
git cherry-pick <sha> --no-commit
```

### 4. Handle conflicts

- **`package-lock.json`**: Don't try to resolve manually. Accept either side, then regenerate:
  ```bash
  git checkout --theirs package-lock.json
  git add package-lock.json
  npm install
  ```
- **Other files**: Review and resolve normally. Pay attention to the `blog/` -> `articles/` rename — git usually handles it, but double-check.

### 5. Verify

Run `npm run build` and confirm it succeeds before committing.

### 6. Commit

Reference the upstream commit in the message so future runs of this skill can find the last sync point:

```
<descriptive summary>

Cherry-picked from upstream josh-collinsworth/sveltekit-blog-starter@<sha>.
```

### 7. Clean up

Remove the upstream remote so it doesn't clutter `git log --all`:

```bash
git remote remove upstream
```
