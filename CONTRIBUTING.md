# CONTRIBUTING

Contributions are always welcome, no matter how large or small. Before contributing,
please read the [code of conduct](CODE_OF_CONDUCT.md).

Some thoughts to help you contribute to this project

## Recommended Communication Style

1. Always leave screenshots for visuals changes
1. Always leave a detailed description in the Pull Request. Leave nothing ambiguous for the reviewer.
1. Always review your code first. Do this by leaving comments in your coding noting questions, or interesting things for the reviewer.
1. Always communicate. Whether it is in the issue or the pull request, keeping the lines of communication helps everyone around you.

## Building

```sh
$ npm run panda:prepare && npm run build
```

## Testing

```bash
# execute test suites
npm run test

# generates code coverage reports
npm run test:coverage
```

## Pull Requests

### _We actively welcome your pull requests, however linking your work to an existing issue is preferred._

1. Fork the repo and create your branch from `develop` or `main` branch.
1. Name your branch something that is descriptive to the work you are doing. i.e. adds-new-thing or fixes-mobile
1. If you've added code that should be tested, add tests.
1. If you've changed APIs, update the documentation.
1. If you make visual changes, screenshots are required.
1. Ensure the test suite passes.
1. Make sure you address any lint warnings.
1. If you make the existing code better, please let us know in your PR description.
1. A PR description and title are required. The title is required to begin with: "feat:" or "fix:"
1. [Link to an issue](https://help.github.com/en/github/writing-on-github/autolinked-references-and-urls) in the project. Unsolicited code is welcomed, but an issue is required for announce your intentions. PR's without a linked issue will be marked invalid and closed.

### PR Validation

Examples for valid PR titles:

- fix: Correct typo.
- feat: Add support for Next 14.
- refactor!: Drop support for Node 6.

_Note that since PR titles only have a single line, you have to use the ! syntax for breaking changes._

See [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for more examples.

## Issues

If you plan to contribute a change based on an open issue, assign yourself. Issues that are not assigned are assumed open, and to avoid conflicts, please assign yourself before beginning work on any issues.

Also, all questions are welcomed.
