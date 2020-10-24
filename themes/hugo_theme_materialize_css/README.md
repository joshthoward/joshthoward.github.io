# Hugo Materialize CSS Theme

A simple Hugo theme based off of Materialize CSS and Material Design.

![screenshot]()

## Installation

Run the following from the Hugo site base directory:

```shell
$ git clone https://github.com/joshthoward/hugo_theme_materialize_css.git themes/hugo_theme_materialize_css
```

## Usage

Use the flags `-t hugo_theme_materialize_css` or `--theme=hugo_theme_materialize_css` with hugo commands. For example:

```shell
$ hugo server -t hugo_theme_materialize_css
```

## Configuration

The following options can be specified in the `config.toml` file of your site:

```
baseURL = "http://example.org/"
languageCode = "en-us"
title = "Hugo Themes"
paginate = 3
theme = "hugo_theme_materialize_css"

[params]
    author = ""
    avatar = ""
    bio = ""
    ga_api_key = ""
    twitter = ""
    facebook = ""
    instagram = ""
    github = ""
    gitlab = ""
    npm = ""
    codepen = ""
    dribbble = ""
    fivehundredpx = ""
    flickr = ""
    pinterest = ""
    tumbler = ""
    vimeo = ""
    youtube = ""
    linkedin = ""
```

## Contributing

Contributions are encouraged!

Please create feature branches from the [develop](https://github.com/joshthoward/hugo_theme_materialize_css/tree/develop) branch, and submit a pull request for any change.

## Development

1. Install the [NPM](https://www.npmjs.com/get-npm) dependencies

```shell
$ npm install
```

2. Compile SCSS and Javascript

```shell
$ npm run build
```

## License

Open sourced under the BSD 3-Clause License.
