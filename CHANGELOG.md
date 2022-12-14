# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog][keep-a-changelog], and this project adheres to [Semantic Versioning][semver].


## [Unreleased]
### Changed
- Migrate all build/dev scripts from `/etc/scripts` to `/packages/dev/...`
- [WIP] Add tests
- Add alternative prop for `transform`


## [0.5.0] - 2022-10-04
> **NOTE:** Going to stop keeping up changelog while version &lt; 1.0.0
### Added
- Add the following components:
    - `Polygon`
    - `Use`
- Add new type definitions:
    - `Unit`
    - `Length`
### Changed
- Improve *@see* links for `SvgPresentationAttributes`
### Removed
- [WIP] Remove ref forwarding for all components
    - [TODO] Possibly create different versions with that accept refs


## [0.4.1] - 2022-10-01
### Fixed
- Assorted prop type fixes


## [0.4.0] - 2022-10-01
### Added
- Add the following components:
    - `Ellipse`
### Changed
- Add `vb` prop to `Svg` component
- Add presentation attribute props to `Path` component
- Roll TypeScript declarations into a single file for easier consumption
- Refactor source code structure


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

[Unreleased]: https://github.com/tcd/svg4react/compare/v0.5.0...HEAD
[0.5.0]: https://github.com/tcd/svg4react/compare/v0.4.1...v0.5.0
[0.4.1]: https://github.com/tcd/svg4react/compare/v0.4.0...v0.4.1
[0.4.0]: https://github.com/tcd/svg4react/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/tcd/svg4react/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/tcd/svg4react/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/tcd/svg4react/releases/tag/v0.1.0
