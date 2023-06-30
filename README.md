Setup CEKit (Container Evolution Kit) GitHub Action
===============================

[![Runner - E2E Tests](https://github.com/cekit/actions-setup-cekit/actions/workflows/runner.yml/badge.svg)](https://github.com/cekit/actions-setup-cekit/actions/workflows/runner.yml)

Setup your GitHub Actions workflow with [Container Evolution Kit](https://github.com/cekit/cekit/)
(CEKit).

_Currently only Linux/Ubuntu
[CI environment](https://help.github.com/en/github/automating-your-workflow-with-github-actions/virtual-environments-for-github-actions)
is supported._

### Basic

```yaml
steps:
  - name: Checkout
    uses: actions/checkout@v3
  - name: Install CEKit
    uses: cekit/actions-setup-cekit@v1.1.5
  - name: Build CEKit image
    run: cekit --descriptor path-to-descriptior.yaml build
```

### Optional input parameters

| Parameter     | Description                                                                    |
| ------------- | ------------------------------------------------------------------------------ |
| `version`     | CEKit [version](https://pypi.org/project/cekit/#history) to install            |

### Advanced

```yaml
steps:
  - name: Checkout
    uses: actions/checkout@v3
  - name: Install CEKit
    uses: cekit/actions-setup-cekit@v1.1.5
  - name: Build CEKit image
    run: cekit --descriptor path-to-descriptior.yaml build
    with:
      version: 3.5.0
```

## License

The scripts and documentation in this project are released under the [Apache 2.0](./LICENSE) License.

## Release process

- Set new version in `pacakge.json`
- Run: `npm install --only=prod`
- Update `README.md` with new version
- Commit `[RELEASE] Release vX.Y.Z`
- Tag+push `vX.Y.Z`
- Create GitHub release for tag
