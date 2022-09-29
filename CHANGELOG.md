# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog][keep-a-changelog], and this project adheres to [Semantic Versioning][semver].


## [Unreleased]
### Added
- Add the following components:
    - `Ellipse`


## [0.3.0] - 2022-09-27
### Added
- Add the following components:
    - `Animate`
    - `AnimateMotion`
    - `AnimateTransform`
    - `Line`
    - `Rect`
    - `Polyline`
### Changed
- Refactor documentation; move docs site project into a separate folder from library source code
- Use `forwardRef` for applicable components
- Add default prop value for `SvgProps.version` ("1.1")
- Add a raw `d` prop to `Path` as an alternative to `commands`
- Use `namespace` for `DrawToArgs`
### Removed
- CommonJS build


## [0.2.0] - 2022-09-21
### Added
- Add initial working components


## [0.1.0] - 2022-09-16
### Added
- Initial version; gotta get that package name


[keep-a-changelog]: https://keepachangelog.com/en/1.0.0/
[semver]: https://semver.org/spec/v2.0.0.html

[Unreleased]: https://github.com/tcd/svg4react/compare/v0.3.0...HEAD
[0.3.0]: https://github.com/tcd/svg4react/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/tcd/svg4react/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/tcd/svg4react/releases/tag/v0.1.0
