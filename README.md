# Jem's Angular 5 Sandbox
Hi,
This repository lists one branch per topic.

## How to use
Some documentation I've written has possibly led you here. Keep in mind that the master branch is meant to initialize your local clone of the project, per-se, you should run the initial npm install from here before switching to a branch. I keep the package.json file as close as possible to the master one, only adding the sandbox branches specific needs.

Different templates are available:
* master: template with routing, commons and framework to ensure some flexibility in the sandbox.
* tpl_basic: basic template with no routing for entry-level sandboxes.



## High-level architecture
I try to keep a same structure in all my projects:
* /app
* (/app)/framework -> ready-made logic that is agnostic of the current app's business logic implementation. Good place for authentication, PWA hooks & co.
* (/app)/commons -> reusable components for the current app and its business logic implementation.
* (/app)/pages -> views of the app - should contain as little business logic as possible. Commons is a better place for that.


Now, a subfolder to any of the above mentionned root folders will usually contain the following set of folders (if contents make them applicable):
* (any)/models -> contains the *.d.ts file (descriptor files aka interface files)
* (any)/directives -> contains directives for this subfolder
* (any)/components -> contains components for this subfolder
* (any)/services -> contains services for this subfolder
* (any)/pipes -> contains pipes for this subfolder
* (any)/styles -> contains scss for this subfolder
* (any)/*.module.ts -> this module file should only contain components, pipes, directives
* (any)/*-services.module.ts -> this module file should only contain singletons registered via forRoot. Very important to understand.
