# Charcoal

_(Ember Boilerplate & Charcoal are very much a work-in-progress at the moment! Feel free to contribute suggestions or code.)_

Charcoal is a build tool for Ember applications, similar to [Backbone Boilerplate](https://github.com/tbranyen/backbone-boilerplate)'s [bbb](https://github.com/backbone-boilerplate/grunt-bbb) tool. It's based off the grunt build tool, which you should get familar with [here](https://github.com/cowboy/grunt) before using.

Charcoal is used to generate and build apps that use [Ember Boilerplate](https://github.com/thomasboyt/Ember-Boilerplate) as a template.

## Installation

```
git clone https://github.com/canvasnyc/charcoal.git
cd charcoal
git checkout gct
cd ../
npm install -g Charcoal/
```

## Creating a Skeleton App

`charcoal init` creates an app out of the basic Ember Boilerplate. It'll ask you what namespace you want your app to have (has to be capitalized, btw), then generate a folder structure, some sample files, and a great grunt.js template.

While the `init` task creates documentation README files in each folder it generates, they are included in the default `.gitignore` file (except, of course, the README in the root folder), so they won't pollute your repo. And, of course, feel free to delete them if you want.

## File Structure

Files in Charcoal are divided into three main folders: `vendor/`, which contains JQuery and Ember.js, `public/`, which will contain your built-out application, and `app/`, where your actual application code resides.

The file structure in Charcoal is really only "defined" in the grunt.js configuration, so it's pretty malleable if you prefer to do something in a different way. Everything below defines default behavior.

### Asset Files

The `app/assets` folder is, for the most part, copied directly over to the `assets` folder in `public/`. You can set files for it to not copy (by default, the README files and Less files) on in your grunt.js config under the `copy` task.

#### Less files

Charcoal can compile Less files via the `less` task in grunt. Make sure to uncomment out and configure the `less` section in your grunt.js file.

### Ember Files

The `app/ember` folder is where the meat of your application is. While the controller, model, and view folders are pretty self-explanatory, the rest of the folder deserves some explanation:

* The files in `app/ember/lib` are, by default (see the discussion of build order in the "Building & Running" section) loaded before anything else in the application. This is where you should put third-party libraries like [flame.js](https://github.com/flamejs/flame.js) or [ember-data](https://github.com/emberjs/data).
* `app/ember/app.js` is the first file run in your app, and creates the namespace. It's also where you should put any initialization code.
* `app/ember/templates` is where Ember templates go. All of your Ember template files are compiled by the `ember_templates` task into `templates.js` by default. That file loads all of the templates into the `Ember.TEMPLATES` global, so you can reference them in your views just like if you had included the template within your page.

## Building & running

In general, the generated grunt.js file used to configure Charcoal is pretty self-documenting. It defines a few basic tasks for building (`charcoal build`), building/minifying for distribution (`charcoal dist`), and serving (the default `charcoal` task). The main thing to remember is to keep it updated as you add files, since while it can use wildcards and make inferences for some stuff, for things like Less compilation you need to be clear on what files to target.

Since Ember doesn't really support any sort of module system (at least not yet), as it mainly uses a global namespace, I didn't see any need to add one to Charcoal. However, there are times when part of one script may depend on part of another. In that case, just make sure the dependency is included first in the `concat` task's configuration. Grunt is of course smart enough to not include the same files twice, so don't worry about specifying the order of a couple files in a folder and using a wildcard for the rest.

## License
Copyright (c) 2012 Thomas Boyt 

Licensed under the MIT license.
