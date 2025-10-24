# kiru-gsap

Development monorepo template for **kiru-gsap**.

## Structure

- `.github`
  - Contains workflows used by GitHub Actions.
- `packages`
  - Contains the individual packages managed in the monorepo.
  - [kiru-gsap](https://github.com/kirujs/kiru-gsap/blob/main/packages/lib)
- `sandbox`
  - Contains example applications and random tidbits.

## Tasks

- Use `make build` to recursively run the build script in each package
- Use `make test` to recursively run the test script in each package
