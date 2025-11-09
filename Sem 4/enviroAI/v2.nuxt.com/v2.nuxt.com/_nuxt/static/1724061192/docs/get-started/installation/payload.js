__NUXT_JSONP__("/docs/get-started/installation", (function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, _, $, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, a_, a$, ba, bb, bc, bd, be, bf, bg, bh, bi, bj, bk, bl, bm, bn, bo, bp, bq, br, bs, bt) {
    return {
        data: [{
            page: {
                key: "content:en:docs:1.get-started:1.installation.md",
                generatedAt: new Date(1724061217934),
                mtime: new Date(1724061217909),
                slug: al,
                title: am,
                position: "999900010001",
                to: "\u002Fdocs\u002Fget-started\u002Finstallation",
                draft: N,
                page: G,
                language: "en",
                description: an,
                category: "get-started",
                csb_link: "https:\u002F\u002Fcodesandbox.io\u002Fembed\u002Fgithub\u002Fnuxt-academy\u002Fguides-examples\u002Ftree\u002Fmaster\u002F01_get_started\u002F01_installation?fontsize=14&hidenavigation=1&theme=dark",
                CreateNuxtAppVideo: "wHkPjOmJTt0",
                CreateNuxtAppVideoTitle: ae,
                ManualInstallVideo: "mKV_9AIG70E",
                ManualInstallVideoTitle: "Nuxt Manual Installation",
                empty: N,
                excerpt: void 0,
                body: {
                    raw: "---\ntitle: Installation\ndescription: Here, you will find information on setting up and running a Nuxt project in 4 steps.\ncategory: get-started\ncsb_link: https:\u002F\u002Fcodesandbox.io\u002Fembed\u002Fgithub\u002Fnuxt-academy\u002Fguides-examples\u002Ftree\u002Fmaster\u002F01_get_started\u002F01_installation?fontsize=14&hidenavigation=1&theme=dark\nCreateNuxtAppVideo: wHkPjOmJTt0\nCreateNuxtAppVideoTitle: Using create-nuxt-app\nManualInstallVideo: mKV_9AIG70E\nManualInstallVideoTitle: Nuxt Manual Installation\n---\n# Installation\n\nHere, you will find information on setting up and running a Nuxt project in 4 steps.\n\n---\n\n## Online playground\n\nYou can play with Nuxt online directly on CodeSandbox or StackBlitz:\n\n:app-button[Play on CodeSandbox]{href=https:\u002F\u002Fcodesandbox.io\u002Fs\u002Fgithub\u002Fnuxt\u002Fcodesandbox-nuxt\u002Ftree\u002Fmaster\u002F size=\"small\" externalIcon}\n:app-button[Play on StackBlitz]{href=https:\u002F\u002Fstackblitz.com\u002Fgithub\u002Fnuxt\u002Fstarter\u002Ftree\u002Fv2-stackblitz size=\"small\" externalIcon .mt-1}\n\n## Prerequisites\n\n- [node](https:\u002F\u002Fnodejs.org) - _We recommend you have either 16.x or 14.x installed_.\n- A text editor, we recommend [VS Code](https:\u002F\u002Fcode.visualstudio.com\u002F) with the [Volar](https:\u002F\u002Fmarketplace.visualstudio.com\u002Fitems?itemName=Vue.volar) extension or [WebStorm](https:\u002F\u002Fwww.jetbrains.com\u002Fwebstorm\u002F).\n- A terminal, we recommend using VS Code's [integrated terminal](https:\u002F\u002Fcode.visualstudio.com\u002Fdocs\u002Feditor\u002Fintegrated-terminal) or [WebStorm terminal](https:\u002F\u002Fwww.jetbrains.com\u002Fhelp\u002Fwebstorm\u002Fterminal-emulator.html).\n\n## Using create-nuxt-app\n\nTo get started quickly, you can use [create-nuxt-app](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fcreate-nuxt-app).\n\nMake sure you have installed yarn, npx (included by default with npm v5.2+) or npm (v6.1+).\n\n::code-group\n```bash [Yarn]\nyarn create nuxt-app \u003Cproject-name\u003E\n```\n```bash [NPX]\nnpx create-nuxt-app \u003Cproject-name\u003E\n```\n```bash [NPM]\nnpm init nuxt-app \u003Cproject-name\u003E\n```\n```bash [PNPM]\npnpm create nuxt-app \u003Cproject-name\u003E\n```\n::\n\nIt will ask you some questions (name, Nuxt options, UI framework, TypeScript, linter, testing framework, etc). To find out more about all the options see the [create-nuxt-app documentation](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fcreate-nuxt-app\u002Fblob\u002Fmaster\u002FREADME.md).\n\nOnce all questions are answered, it will install all the dependencies. The next step is to navigate to the project folder and launch it:\n\n::code-group\n```bash [Yarn]\ncd \u003Cproject-name\u003E\nyarn dev\n```\n```bash [NPM]\ncd \u003Cproject-name\u003E\nnpm run dev\n```\n```bash [PNPM]\ncd \u003Cproject-name\u003E\npnpm dev\n```\n::\n\nThe application is now running on [http:\u002F\u002Flocalhost:3000](http:\u002F\u002Flocalhost:3000). Well done!\n\n::alert{type=\"info\"}\nAnother way to get started with Nuxt is to use [CodeSandbox](https:\u002F\u002Ftemplate.nuxtjs.org) which is a great way for quickly playing around with Nuxt and\u002For sharing your code with other people.\n::\n\n## Manual Installation\n\nCreating a Nuxt project from scratch only requires one file and one directory.\n\nWe will use the terminal to create the directories and files, feel free to create them using your editor of choice.\n\n### Set up your project\n\nCreate an empty directory with the name of your project and navigate into it:\n\n```bash\nmkdir \u003Cproject-name\u003E\ncd \u003Cproject-name\u003E\n```\n\n_Replace `\u003Cproject-name\u003E` with the name of your project._\n\nCreate the `package.json` file:\n\n```bash\ntouch package.json\n```\n\nFill the content of your `package.json` with:\n\n```json{}[package.json]\n{\n  \"name\": \"my-app\",\n  \"scripts\": {\n    \"dev\": \"nuxt\",\n    \"build\": \"nuxt build\",\n    \"generate\": \"nuxt generate\",\n    \"start\": \"nuxt start\"\n  }\n}\n```\n\n`scripts` define Nuxt commands that will be launched with the command `npm run \u003Ccommand\u003E` or `yarn \u003Ccommand\u003E`.\n\n#### **What is a package.json file?**\n\nThe `package.json` is like the ID card of your project. It contains all the project dependencies and much more. If you don't know what the `package.json` file is, we highly recommend you to have a quick read on the [npm documentation](https:\u002F\u002Fdocs.npmjs.com\u002Fcreating-a-package-json-file).\n\n### Install Nuxt\n\nOnce the `package.json` has been created, add `nuxt` to your project via `npm` or `yarn` like so below:\n\n::code-group\n```bash [Yarn]\nyarn add nuxt\n```\n```bash [NPM]\nnpm install nuxt\n```\n```bash [PNPM]\npnpm add nuxt --shamefully-hoist\n```\n::\n\nThis command will add `nuxt` as a dependency to your project and add it to your `package.json`. The `node_modules` directory will also be created which is where all your installed packages and dependencies are stored.\n\n::alert{type=\"info\"}\n\nA `yarn.lock` or `package-lock.json` is also created which ensures a consistent install and compatible dependencies of your packages installed in your project.\n\n::\n\n### Create your first page\n\nNuxt transforms every `*.vue` file inside the `pages` directory as a route for the application.\n\nCreate the `pages` directory in your project:\n\n```bash\nmkdir pages\n```\n\nThen, create an `index.vue` file in the `pages` directory:\n\n```bash\ntouch pages\u002Findex.vue\n```\n\nIt is important that this page is called `index.vue` as this will be the default home page Nuxt shows when the application opens.\n\nOpen the `index.vue` file in your editor and add the following content:\n\n```html{}[pages\u002Findex.vue]\n\u003Ctemplate\u003E\n  \u003Ch1\u003EHello world!\u003C\u002Fh1\u003E\n\u003C\u002Ftemplate\u003E\n```\n\n### Start the project\n\nRun your project by typing one of the following commands below in your terminal:\n\n::code-group\n```bash [Yarn]\nyarn dev\n```\n```bash [NPM]\nnpm run dev\n```\n```bash [PNPM]\npnpm dev\n```\n::\n\n::alert{type=\"info\"}\n\nWe use the dev command when running our application in development mode.\n\n::\n\nThe application is now running on **[http:\u002F\u002Flocalhost:3000](http:\u002F\u002Flocalhost:3000\u002F)**.\n\nOpen it in your browser by clicking the link in your terminal and you should see the text \"Hello World\" we copied in the previous step.\n\n::alert{type=\"info\"}\n\nWhen launching Nuxt in development mode, it will listen for file changes in most directories, so there is no need to restart the application when e.g. adding new pages\n\n::\n\n::alert{type=\"warning\"}\n\nWhen you run the dev command it will create a .nuxt folder. This folder should be ignored from version control. You can ignore files by creating a .gitignore file at the root level and adding .nuxt.\n\n::\n\n### Bonus step\n\nCreate a page named `fun.vue` in the `pages` directory.\n\nAdd a `\u003Ctemplate\u003E\u003C\u002Ftemplate\u003E` and include a heading with a funny sentence inside.\n\nThen, go to your browser and see your new page on **[localhost:3000\u002Ffun](http:\u002F\u002Flocalhost:3000\u002Ffun)**.\n\n::alert{type=\"info\"}\n\nCreating a directory named `more-fun` and putting an `index.vue` file inside it will give the same result as creating a `more-fun.vue` file.\n\n::\n",
                    ast: {
                        type: "root",
                        children: [{
                            type: b,
                            tag: "prose-h1",
                            props: {
                                class: "d-heading-title",
                                id: al
                            },
                            children: [{
                                type: a,
                                value: am
                            }]
                        }, {
                            type: a,
                            value: e
                        }, {
                            type: b,
                            tag: f,
                            props: {
                                class: "d-heading-description"
                            },
                            children: [{
                                type: a,
                                value: an
                            }]
                        }, {
                            type: a,
                            value: e
                        }, {
                            type: b,
                            tag: "prose-hr",
                            props: {
                                class: "d-heading-hr"
                            },
                            children: []
                        }, {
                            type: a,
                            value: e
                        }, {
                            type: b,
                            tag: O,
                            props: {
                                id: ao
                            },
                            children: [{
                                type: b,
                                tag: i,
                                props: {
                                    href: "#online-playground"
                                },
                                children: [{
                                    type: a,
                                    value: ap
                                }]
                            }]
                        }, {
                            type: a,
                            value: e
                        }, {
                            type: b,
                            tag: f,
                            props: {},
                            children: [{
                                type: a,
                                value: "You can play with Nuxt online directly on CodeSandbox or StackBlitz:"
                            }]
                        }, {
                            type: a,
                            value: e
                        }, {
                            type: b,
                            tag: aq,
                            props: {
                                ":externalIcon": ar,
                                href: "https:\u002F\u002Fcodesandbox.io\u002Fs\u002Fgithub\u002Fnuxt\u002Fcodesandbox-nuxt\u002Ftree\u002Fmaster\u002F",
                                size: as
                            },
                            children: [{
                                type: a,
                                value: "Play on CodeSandbox"
                            }]
                        }, {
                            type: a,
                            value: e
                        }, {
                            type: b,
                            tag: aq,
                            props: {
                                ":externalIcon": ar,
                                href: "https:\u002F\u002Fstackblitz.com\u002Fgithub\u002Fnuxt\u002Fstarter\u002Ftree\u002Fv2-stackblitz",
                                size: as,
                                className: ["mt-1"]
                            },
                            children: [{
                                type: a,
                                value: "Play on StackBlitz"
                            }]
                        }, {
                            type: a,
                            value: e
                        }, {
                            type: b,
                            tag: O,
                            props: {
                                id: at
                            },
                            children: [{
                                type: b,
                                tag: i,
                                props: {
                                    href: "#prerequisites"
                                },
                                children: [{
                                    type: a,
                                    value: au
                                }]
                            }]
                        }, {
                            type: a,
                            value: e
                        }, {
                            type: b,
                            tag: "prose-ul",
                            props: {},
                            children: [{
                                type: a,
                                value: e
                            }, {
                                type: b,
                                tag: af,
                                props: {},
                                children: [{
                                    type: a,
                                    value: e
                                }, {
                                    type: b,
                                    tag: i,
                                    props: {
                                        href: "https:\u002F\u002Fnodejs.org",
                                        rel: [s, t, u],
                                        target: v
                                    },
                                    children: [{
                                        type: a,
                                        value: "node"
                                    }]
                                }, {
                                    type: a,
                                    value: " - "
                                }, {
                                    type: b,
                                    tag: av,
                                    props: {},
                                    children: [{
                                        type: a,
                                        value: "We recommend you have either 16.x or 14.x installed"
                                    }]
                                }, {
                                    type: a,
                                    value: y
                                }, {
                                    type: a,
                                    value: e
                                }]
                            }, {
                                type: a,
                                value: e
                            }, {
                                type: b,
                                tag: af,
                                props: {},
                                children: [{
                                    type: a,
                                    value: e
                                }, {
                                    type: a,
                                    value: "A text editor, we recommend "
                                }, {
                                    type: b,
                                    tag: i,
                                    props: {
                                        href: "https:\u002F\u002Fcode.visualstudio.com\u002F",
                                        rel: [s, t, u],
                                        target: v
                                    },
                                    children: [{
                                        type: a,
                                        value: "VS Code"
                                    }]
                                }, {
                                    type: a,
                                    value: " with the "
                                }, {
                                    type: b,
                                    tag: i,
                                    props: {
                                        href: "https:\u002F\u002Fmarketplace.visualstudio.com\u002Fitems?itemName=Vue.volar",
                                        rel: [s, t, u],
                                        target: v
                                    },
                                    children: [{
                                        type: a,
                                        value: "Volar"
                                    }]
                                }, {
                                    type: a,
                                    value: " extension or "
                                }, {
                                    type: b,
                                    tag: i,
                                    props: {
                                        href: "https:\u002F\u002Fwww.jetbrains.com\u002Fwebstorm\u002F",
                                        rel: [s, t, u],
                                        target: v
                                    },
                                    children: [{
                                        type: a,
                                        value: "WebStorm"
                                    }]
                                }, {
                                    type: a,
                                    value: y
                                }, {
                                    type: a,
                                    value: e
                                }]
                            }, {
                                type: a,
                                value: e
                            }, {
                                type: b,
                                tag: af,
                                props: {},
                                children: [{
                                    type: a,
                                    value: e
                                }, {
                                    type: a,
                                    value: "A terminal, we recommend using VS Code's "
                                }, {
                                    type: b,
                                    tag: i,
                                    props: {
                                        href: "https:\u002F\u002Fcode.visualstudio.com\u002Fdocs\u002Feditor\u002Fintegrated-terminal",
                                        rel: [s, t, u],
                                        target: v
                                    },
                                    children: [{
                                        type: a,
                                        value: "integrated terminal"
                                    }]
                                }, {
                                    type: a,
                                    value: P
                                }, {
                                    type: b,
                                    tag: i,
                                    props: {
                                        href: "https:\u002F\u002Fwww.jetbrains.com\u002Fhelp\u002Fwebstorm\u002Fterminal-emulator.html",
                                        rel: [s, t, u],
                                        target: v
                                    },
                                    children: [{
                                        type: a,
                                        value: "WebStorm terminal"
                                    }]
                                }, {
                                    type: a,
                                    value: y
                                }, {
                                    type: a,
                                    value: e
                                }]
                            }, {
                                type: a,
                                value: e
                            }]
                        }, {
                            type: a,
                            value: e
                        }, {
                            type: b,
                            tag: O,
                            props: {
                                id: aw
                            },
                            children: [{
                                type: b,
                                tag: i,
                                props: {
                                    href: "#using-create-nuxt-app"
                                },
                                children: [{
                                    type: a,
                                    value: ae
                                }]
                            }]
                        }, {
                            type: a,
                            value: e
                        }, {
                            type: b,
                            tag: f,
                            props: {},
                            children: [{
                                type: a,
                                value: "To get started quickly, you can use "
                            }, {
                                type: b,
                                tag: i,
                                props: {
                                    href: "https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fcreate-nuxt-app",
                                    rel: [s, t, u],
                                    target: v
                                },
                                children: [{
                                    type: a,
                                    value: "create-nuxt-app"
                                }]
                            }, {
                                type: a,
                                value: y
                            }]
                        }, {
                            type: a,
                            value: e
                        }, {
                            type: b,
                            tag: f,
                            props: {},
                            children: [{
                                type: a,
                                value: "Make sure you have installed yarn, npx (included by default with npm v5.2+) or npm (v6.1+)."
                            }]
                        }, {
                            type: a,
                            value: e
                        }, {
                            type: b,
                            tag: Q,
                            props: {},
                            children: [{
                                type: b,
                                tag: j,
                                props: {},
                                children: [{
                                    type: b,
                                    tag: c,
                                    props: {
                                        className: [q]
                                    },
                                    children: [{
                                        type: a,
                                        value: R
                                    }]
                                }, {
                                    type: b,
                                    tag: k,
                                    props: {
                                        className: [l, o]
                                    },
                                    children: [{
                                        type: b,
                                        tag: m,
                                        props: {},
                                        children: [{
                                            type: b,
                                            tag: c,
                                            props: {
                                                className: [d, n]
                                            },
                                            children: [{
                                                type: a,
                                                value: H
                                            }]
                                        }, {
                                            type: a,
                                            value: ax
                                        }, {
                                            type: b,
                                            tag: c,
                                            props: {
                                                className: [d, h]
                                            },
                                            children: [{
                                                type: a,
                                                value: x
                                            }]
                                        }, {
                                            type: a,
                                            value: z
                                        }, {
                                            type: b,
                                            tag: c,
                                            props: {
                                                className: [d, h]
                                            },
                                            children: [{
                                                type: a,
                                                value: w
                                            }]
                                        }, {
                                            type: a,
                                            value: e
                                        }]
                                    }]
                                }]
                            }, {
                                type: b,
                                tag: j,
                                props: {},
                                children: [{
                                    type: b,
                                    tag: c,
                                    props: {
                                        className: [q]
                                    },
                                    children: [{
                                        type: a,
                                        value: "NPX"
                                    }]
                                }, {
                                    type: b,
                                    tag: k,
                                    props: {
                                        className: [l, o]
                                    },
                                    children: [{
                                        type: b,
                                        tag: m,
                                        props: {},
                                        children: [{
                                            type: a,
                                            value: "npx create-nuxt-app "
                                        }, {
                                            type: b,
                                            tag: c,
                                            props: {
                                                className: [d, h]
                                            },
                                            children: [{
                                                type: a,
                                                value: x
                                            }]
                                        }, {
                                            type: a,
                                            value: z
                                        }, {
                                            type: b,
                                            tag: c,
                                            props: {
                                                className: [d, h]
                                            },
                                            children: [{
                                                type: a,
                                                value: w
                                            }]
                                        }, {
                                            type: a,
                                            value: e
                                        }]
                                    }]
                                }]
                            }, {
                                type: b,
                                tag: j,
                                props: {},
                                children: [{
                                    type: b,
                                    tag: c,
                                    props: {
                                        className: [q]
                                    },
                                    children: [{
                                        type: a,
                                        value: S
                                    }]
                                }, {
                                    type: b,
                                    tag: k,
                                    props: {
                                        className: [l, o]
                                    },
                                    children: [{
                                        type: b,
                                        tag: m,
                                        props: {},
                                        children: [{
                                            type: b,
                                            tag: c,
                                            props: {
                                                className: [d, n]
                                            },
                                            children: [{
                                                type: a,
                                                value: I
                                            }]
                                        }, {
                                            type: a,
                                            value: " init nuxt-app "
                                        }, {
                                            type: b,
                                            tag: c,
                                            props: {
                                                className: [d, h]
                                            },
                                            children: [{
                                                type: a,
                                                value: x
                                            }]
                                        }, {
                                            type: a,
                                            value: z
                                        }, {
                                            type: b,
                                            tag: c,
                                            props: {
                                                className: [d, h]
                                            },
                                            children: [{
                                                type: a,
                                                value: w
                                            }]
                                        }, {
                                            type: a,
                                            value: e
                                        }]
                                    }]
                                }]
                            }, {
                                type: b,
                                tag: j,
                                props: {},
                                children: [{
                                    type: b,
                                    tag: c,
                                    props: {
                                        className: [q]
                                    },
                                    children: [{
                                        type: a,
                                        value: T
                                    }]
                                }, {
                                    type: b,
                                    tag: k,
                                    props: {
                                        className: [l, o]
                                    },
                                    children: [{
                                        type: b,
                                        tag: m,
                                        props: {},
                                        children: [{
                                            type: b,
                                            tag: c,
                                            props: {
                                                className: [d, n]
                                            },
                                            children: [{
                                                type: a,
                                                value: U
                                            }]
                                        }, {
                                            type: a,
                                            value: ax
                                        }, {
                                            type: b,
                                            tag: c,
                                            props: {
                                                className: [d, h]
                                            },
                                            children: [{
                                                type: a,
                                                value: x
                                            }]
                                        }, {
                                            type: a,
                                            value: z
                                        }, {
                                            type: b,
                                            tag: c,
                                            props: {
                                                className: [d, h]
                                            },
                                            children: [{
                                                type: a,
                                                value: w
                                            }]
                                        }, {
                                            type: a,
                                            value: e
                                        }]
                                    }]
                                }]
                            }]
                        }, {
                            type: a,
                            value: e
                        }, {
                            type: b,
                            tag: f,
                            props: {},
                            children: [{
                                type: a,
                                value: "It will ask you some questions (name, Nuxt options, UI framework, TypeScript, linter, testing framework, etc). To find out more about all the options see the "
                            }, {
                                type: b,
                                tag: i,
                                props: {
                                    href: "https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fcreate-nuxt-app\u002Fblob\u002Fmaster\u002FREADME.md",
                                    rel: [s, t, u],
                                    target: v
                                },
                                children: [{
                                    type: a,
                                    value: "create-nuxt-app documentation"
                                }]
                            }, {
                                type: a,
                                value: y
                            }]
                        }, {
                            type: a,
                            value: e
                        }, {
                            type: b,
                            tag: f,
                            props: {},
                            children: [{
                                type: a,
                                value: "Once all questions are answered, it will install all the dependencies. The next step is to navigate to the project folder and launch it:"
                            }]
                        }, {
                            type: a,
                            value: e
                        }, {
                            type: b,
                            tag: Q,
                            props: {},
                            children: [{
                                type: b,
                                tag: j,
                                props: {},
                                children: [{
                                    type: b,
                                    tag: c,
                                    props: {
                                        className: [q]
                                    },
                                    children: [{
                                        type: a,
                                        value: R
                                    }]
                                }, {
                                    type: b,
                                    tag: k,
                                    props: {
                                        className: [l, o]
                                    },
                                    children: [{
                                        type: b,
                                        tag: m,
                                        props: {},
                                        children: [{
                                            type: b,
                                            tag: c,
                                            props: {
                                                className: [d, V, W]
                                            },
                                            children: [{
                                                type: a,
                                                value: X
                                            }]
                                        }, {
                                            type: a,
                                            value: r
                                        }, {
                                            type: b,
                                            tag: c,
                                            props: {
                                                className: [d, h]
                                            },
                                            children: [{
                                                type: a,
                                                value: x
                                            }]
                                        }, {
                                            type: a,
                                            value: z
                                        }, {
                                            type: b,
                                            tag: c,
                                            props: {
                                                className: [d, h]
                                            },
                                            children: [{
                                                type: a,
                                                value: w
                                            }]
                                        }, {
                                            type: a,
                                            value: e
                                        }, {
                                            type: b,
                                            tag: c,
                                            props: {
                                                className: [d, n]
                                            },
                                            children: [{
                                                type: a,
                                                value: H
                                            }]
                                        }, {
                                            type: a,
                                            value: Y
                                        }]
                                    }]
                                }]
                            }, {
                                type: b,
                                tag: j,
                                props: {},
                                children: [{
                                    type: b,
                                    tag: c,
                                    props: {
                                        className: [q]
                                    },
                                    children: [{
                                        type: a,
                                        value: S
                                    }]
                                }, {
                                    type: b,
                                    tag: k,
                                    props: {
                                        className: [l, o]
                                    },
                                    children: [{
                                        type: b,
                                        tag: m,
                                        props: {},
                                        children: [{
                                            type: b,
                                            tag: c,
                                            props: {
                                                className: [d, V, W]
                                            },
                                            children: [{
                                                type: a,
                                                value: X
                                            }]
                                        }, {
                                            type: a,
                                            value: r
                                        }, {
                                            type: b,
                                            tag: c,
                                            props: {
                                                className: [d, h]
                                            },
                                            children: [{
                                                type: a,
                                                value: x
                                            }]
                                        }, {
                                            type: a,
                                            value: z
                                        }, {
                                            type: b,
                                            tag: c,
                                            props: {
                                                className: [d, h]
                                            },
                                            children: [{
                                                type: a,
                                                value: w
                                            }]
                                        }, {
                                            type: a,
                                            value: e
                                        }, {
                                            type: b,
                                            tag: c,
                                            props: {
                                                className: [d, n]
                                            },
                                            children: [{
                                                type: a,
                                                value: I
                                            }]
                                        }, {
                                            type: a,
                                            value: ay
                                        }]
                                    }]
                                }]
                            }, {
                                type: b,
                                tag: j,
                                props: {},
                                children: [{
                                    type: b,
                                    tag: c,
                                    props: {
                                        className: [q]
                                    },
                                    children: [{
                                        type: a,
                                        value: T
                                    }]
                                }, {
                                    type: b,
                                    tag: k,
                                    props: {
                                        className: [l, o]
                                    },
                                    children: [{
                                        type: b,
                                        tag: m,
                                        props: {},
                                        children: [{
                                            type: b,
                                            tag: c,
                                            props: {
                                                className: [d, V, W]
                                            },
                                            children: [{
                                                type: a,
                                                value: X
                                            }]
                                        }, {
                                            type: a,
                                            value: r
                                        }, {
                                            type: b,
                                            tag: c,
                                            props: {
                                                className: [d, h]
                                            },
                                            children: [{
                                                type: a,
                                                value: x
                                            }]
                                        }, {
                                            type: a,
                                            value: z
                                        }, {
                                            type: b,
                                            tag: c,
                                            props: {
                                                className: [d, h]
                                            },
                                            children: [{
                                                type: a,
                                                value: w
                                            }]
                                        }, {
                                            type: a,
                                            value: e
                                        }, {
                                            type: b,
                                            tag: c,
                                            props: {
                                                className: [d, n]
                                            },
                                            children: [{
                                                type: a,
                                                value: U
                                            }]
                                        }, {
                                            type: a,
                                            value: Y
                                        }]
                                    }]
                                }]
                            }]
                        }, {
                            type: a,
                            value: e
                        }, {
                            type: b,
                            tag: f,
                            props: {},
                            children: [{
                                type: a,
                                value: az
                            }, {
                                type: b,
                                tag: i,
                                props: {
                                    href: ag,
                                    rel: [s, t, u],
                                    target: v
                                },
                                children: [{
                                    type: a,
                                    value: ag
                                }]
                            }, {
                                type: a,
                                value: ". Well done!"
                            }]
                        }, {
                            type: a,
                            value: e
                        }, {
                            type: b,
                            tag: C,
                            props: {
                                type: J
                            },
                            children: [{
                                type: b,
                                tag: f,
                                props: {},
                                children: [{
                                    type: a,
                                    value: "Another way to get started with Nuxt is to use "
                                }, {
                                    type: b,
                                    tag: i,
                                    props: {
                                        href: "https:\u002F\u002Ftemplate.nuxtjs.org",
                                        rel: [s, t, u],
                                        target: v
                                    },
                                    children: [{
                                        type: a,
                                        value: "CodeSandbox"
                                    }]
                                }, {
                                    type: a,
                                    value: " which is a great way for quickly playing around with Nuxt and\u002For sharing your code with other people."
                                }]
                            }]
                        }, {
                            type: a,
                            value: e
                        }, {
                            type: b,
                            tag: O,
                            props: {
                                id: aA
                            },
                            children: [{
                                type: b,
                                tag: i,
                                props: {
                                    href: "#manual-installation"
                                },
                                children: [{
                                    type: a,
                                    value: aB
                                }]
                            }]
                        }, {
                            type: a,
                            value: e
                        }, {
                            type: b,
                            tag: f,
                            props: {},
                            children: [{
                                type: a,
                                value: "Creating a Nuxt project from scratch only requires one file and one directory."
                            }]
                        }, {
                            type: a,
                            value: e
                        }, {
                            type: b,
                            tag: f,
                            props: {},
                            children: [{
                                type: a,
                                value: "We will use the terminal to create the directories and files, feel free to create them using your editor of choice."
                            }]
                        }, {
                            type: a,
                            value: e
                        }, {
                            type: b,
                            tag: K,
                            props: {
                                id: aC
                            },
                            children: [{
                                type: b,
                                tag: i,
                                props: {
                                    href: "#set-up-your-project"
                                },
                                children: [{
                                    type: a,
                                    value: aD
                                }]
                            }]
                        }, {
                            type: a,
                            value: e
                        }, {
                            type: b,
                            tag: f,
                            props: {},
                            children: [{
                                type: a,
                                value: "Create an empty directory with the name of your project and navigate into it:"
                            }]
                        }, {
                            type: a,
                            value: e
                        }, {
                            type: b,
                            tag: j,
                            props: {},
                            children: [{
                                type: b,
                                tag: k,
                                props: {
                                    className: [l, o]
                                },
                                children: [{
                                    type: b,
                                    tag: m,
                                    props: {},
                                    children: [{
                                        type: b,
                                        tag: c,
                                        props: {
                                            className: [d, n]
                                        },
                                        children: [{
                                            type: a,
                                            value: aE
                                        }]
                                    }, {
                                        type: a,
                                        value: r
                                    }, {
                                        type: b,
                                        tag: c,
                                        props: {
                                            className: [d, h]
                                        },
                                        children: [{
                                            type: a,
                                            value: x
                                        }]
                                    }, {
                                        type: a,
                                        value: z
                                    }, {
                                        type: b,
                                        tag: c,
                                        props: {
                                            className: [d, h]
                                        },
                                        children: [{
                                            type: a,
                                            value: w
                                        }]
                                    }, {
                                        type: a,
                                        value: e
                                    }, {
                                        type: b,
                                        tag: c,
                                        props: {
                                            className: [d, V, W]
                                        },
                                        children: [{
                                            type: a,
                                            value: X
                                        }]
                                    }, {
                                        type: a,
                                        value: r
                                    }, {
                                        type: b,
                                        tag: c,
                                        props: {
                                            className: [d, h]
                                        },
                                        children: [{
                                            type: a,
                                            value: x
                                        }]
                                    }, {
                                        type: a,
                                        value: z
                                    }, {
                                        type: b,
                                        tag: c,
                                        props: {
                                            className: [d, h]
                                        },
                                        children: [{
                                            type: a,
                                            value: w
                                        }]
                                    }, {
                                        type: a,
                                        value: e
                                    }]
                                }]
                            }]
                        }, {
                            type: a,
                            value: e
                        }, {
                            type: b,
                            tag: f,
                            props: {},
                            children: [{
                                type: b,
                                tag: av,
                                props: {},
                                children: [{
                                    type: a,
                                    value: "Replace "
                                }, {
                                    type: b,
                                    tag: g,
                                    props: {},
                                    children: [{
                                        type: a,
                                        value: "\u003Cproject-name\u003E"
                                    }]
                                }, {
                                    type: a,
                                    value: " with the name of your project."
                                }]
                            }]
                        }, {
                            type: a,
                            value: e
                        }, {
                            type: b,
                            tag: f,
                            props: {},
                            children: [{
                                type: a,
                                value: aF
                            }, {
                                type: b,
                                tag: g,
                                props: {},
                                children: [{
                                    type: a,
                                    value: B
                                }]
                            }, {
                                type: a,
                                value: " file:"
                            }]
                        }, {
                            type: a,
                            value: e
                        }, {
                            type: b,
                            tag: j,
                            props: {},
                            children: [{
                                type: b,
                                tag: k,
                                props: {
                                    className: [l, o]
                                },
                                children: [{
                                    type: b,
                                    tag: m,
                                    props: {},
                                    children: [{
                                        type: b,
                                        tag: c,
                                        props: {
                                            className: [d, n]
                                        },
                                        children: [{
                                            type: a,
                                            value: aG
                                        }]
                                    }, {
                                        type: a,
                                        value: " package.json\n"
                                    }]
                                }]
                            }]
                        }, {
                            type: a,
                            value: e
                        }, {
                            type: b,
                            tag: f,
                            props: {},
                            children: [{
                                type: a,
                                value: "Fill the content of your "
                            }, {
                                type: b,
                                tag: g,
                                props: {},
                                children: [{
                                    type: a,
                                    value: B
                                }]
                            }, {
                                type: a,
                                value: " with:"
                            }]
                        }, {
                            type: a,
                            value: e
                        }, {
                            type: b,
                            tag: j,
                            props: {},
                            children: [{
                                type: b,
                                tag: c,
                                props: {
                                    className: [q]
                                },
                                children: [{
                                    type: a,
                                    value: B
                                }]
                            }, {
                                type: b,
                                tag: k,
                                props: {
                                    className: [l, "language-json"]
                                },
                                children: [{
                                    type: b,
                                    tag: m,
                                    props: {},
                                    children: [{
                                        type: b,
                                        tag: c,
                                        props: {
                                            className: [d, p]
                                        },
                                        children: [{
                                            type: a,
                                            value: aH
                                        }]
                                    }, {
                                        type: a,
                                        value: Z
                                    }, {
                                        type: b,
                                        tag: c,
                                        props: {
                                            className: [d, D]
                                        },
                                        children: [{
                                            type: a,
                                            value: "\"name\""
                                        }]
                                    }, {
                                        type: b,
                                        tag: c,
                                        props: {
                                            className: [d, h]
                                        },
                                        children: [{
                                            type: a,
                                            value: E
                                        }]
                                    }, {
                                        type: a,
                                        value: r
                                    }, {
                                        type: b,
                                        tag: c,
                                        props: {
                                            className: [d, L]
                                        },
                                        children: [{
                                            type: a,
                                            value: "\"my-app\""
                                        }]
                                    }, {
                                        type: b,
                                        tag: c,
                                        props: {
                                            className: [d, p]
                                        },
                                        children: [{
                                            type: a,
                                            value: _
                                        }]
                                    }, {
                                        type: a,
                                        value: Z
                                    }, {
                                        type: b,
                                        tag: c,
                                        props: {
                                            className: [d, D]
                                        },
                                        children: [{
                                            type: a,
                                            value: "\"scripts\""
                                        }]
                                    }, {
                                        type: b,
                                        tag: c,
                                        props: {
                                            className: [d, h]
                                        },
                                        children: [{
                                            type: a,
                                            value: E
                                        }]
                                    }, {
                                        type: a,
                                        value: r
                                    }, {
                                        type: b,
                                        tag: c,
                                        props: {
                                            className: [d, p]
                                        },
                                        children: [{
                                            type: a,
                                            value: aH
                                        }]
                                    }, {
                                        type: a,
                                        value: $
                                    }, {
                                        type: b,
                                        tag: c,
                                        props: {
                                            className: [d, D]
                                        },
                                        children: [{
                                            type: a,
                                            value: "\"dev\""
                                        }]
                                    }, {
                                        type: b,
                                        tag: c,
                                        props: {
                                            className: [d, h]
                                        },
                                        children: [{
                                            type: a,
                                            value: E
                                        }]
                                    }, {
                                        type: a,
                                        value: r
                                    }, {
                                        type: b,
                                        tag: c,
                                        props: {
                                            className: [d, L]
                                        },
                                        children: [{
                                            type: a,
                                            value: "\"nuxt\""
                                        }]
                                    }, {
                                        type: b,
                                        tag: c,
                                        props: {
                                            className: [d, p]
                                        },
                                        children: [{
                                            type: a,
                                            value: _
                                        }]
                                    }, {
                                        type: a,
                                        value: $
                                    }, {
                                        type: b,
                                        tag: c,
                                        props: {
                                            className: [d, D]
                                        },
                                        children: [{
                                            type: a,
                                            value: "\"build\""
                                        }]
                                    }, {
                                        type: b,
                                        tag: c,
                                        props: {
                                            className: [d, h]
                                        },
                                        children: [{
                                            type: a,
                                            value: E
                                        }]
                                    }, {
                                        type: a,
                                        value: r
                                    }, {
                                        type: b,
                                        tag: c,
                                        props: {
                                            className: [d, L]
                                        },
                                        children: [{
                                            type: a,
                                            value: "\"nuxt build\""
                                        }]
                                    }, {
                                        type: b,
                                        tag: c,
                                        props: {
                                            className: [d, p]
                                        },
                                        children: [{
                                            type: a,
                                            value: _
                                        }]
                                    }, {
                                        type: a,
                                        value: $
                                    }, {
                                        type: b,
                                        tag: c,
                                        props: {
                                            className: [d, D]
                                        },
                                        children: [{
                                            type: a,
                                            value: "\"generate\""
                                        }]
                                    }, {
                                        type: b,
                                        tag: c,
                                        props: {
                                            className: [d, h]
                                        },
                                        children: [{
                                            type: a,
                                            value: E
                                        }]
                                    }, {
                                        type: a,
                                        value: r
                                    }, {
                                        type: b,
                                        tag: c,
                                        props: {
                                            className: [d, L]
                                        },
                                        children: [{
                                            type: a,
                                            value: "\"nuxt generate\""
                                        }]
                                    }, {
                                        type: b,
                                        tag: c,
                                        props: {
                                            className: [d, p]
                                        },
                                        children: [{
                                            type: a,
                                            value: _
                                        }]
                                    }, {
                                        type: a,
                                        value: $
                                    }, {
                                        type: b,
                                        tag: c,
                                        props: {
                                            className: [d, D]
                                        },
                                        children: [{
                                            type: a,
                                            value: "\"start\""
                                        }]
                                    }, {
                                        type: b,
                                        tag: c,
                                        props: {
                                            className: [d, h]
                                        },
                                        children: [{
                                            type: a,
                                            value: E
                                        }]
                                    }, {
                                        type: a,
                                        value: r
                                    }, {
                                        type: b,
                                        tag: c,
                                        props: {
                                            className: [d, L]
                                        },
                                        children: [{
                                            type: a,
                                            value: "\"nuxt start\""
                                        }]
                                    }, {
                                        type: a,
                                        value: Z
                                    }, {
                                        type: b,
                                        tag: c,
                                        props: {
                                            className: [d, p]
                                        },
                                        children: [{
                                            type: a,
                                            value: aI
                                        }]
                                    }, {
                                        type: a,
                                        value: e
                                    }, {
                                        type: b,
                                        tag: c,
                                        props: {
                                            className: [d, p]
                                        },
                                        children: [{
                                            type: a,
                                            value: aI
                                        }]
                                    }, {
                                        type: a,
                                        value: e
                                    }]
                                }]
                            }]
                        }, {
                            type: a,
                            value: e
                        }, {
                            type: b,
                            tag: f,
                            props: {},
                            children: [{
                                type: b,
                                tag: g,
                                props: {},
                                children: [{
                                    type: a,
                                    value: "scripts"
                                }]
                            }, {
                                type: a,
                                value: " define Nuxt commands that will be launched with the command "
                            }, {
                                type: b,
                                tag: g,
                                props: {},
                                children: [{
                                    type: a,
                                    value: "npm run \u003Ccommand\u003E"
                                }]
                            }, {
                                type: a,
                                value: P
                            }, {
                                type: b,
                                tag: g,
                                props: {},
                                children: [{
                                    type: a,
                                    value: "yarn \u003Ccommand\u003E"
                                }]
                            }, {
                                type: a,
                                value: y
                            }]
                        }, {
                            type: a,
                            value: e
                        }, {
                            type: b,
                            tag: "prose-h4",
                            props: {
                                id: "what-is-a-packagejson-file"
                            },
                            children: [{
                                type: b,
                                tag: i,
                                props: {
                                    href: "#what-is-a-packagejson-file"
                                },
                                children: [{
                                    type: b,
                                    tag: ah,
                                    props: {},
                                    children: [{
                                        type: a,
                                        value: "What is a package.json file?"
                                    }]
                                }]
                            }]
                        }, {
                            type: a,
                            value: e
                        }, {
                            type: b,
                            tag: f,
                            props: {},
                            children: [{
                                type: a,
                                value: "The "
                            }, {
                                type: b,
                                tag: g,
                                props: {},
                                children: [{
                                    type: a,
                                    value: B
                                }]
                            }, {
                                type: a,
                                value: " is like the ID card of your project. It contains all the project dependencies and much more. If you don't know what the "
                            }, {
                                type: b,
                                tag: g,
                                props: {},
                                children: [{
                                    type: a,
                                    value: B
                                }]
                            }, {
                                type: a,
                                value: " file is, we highly recommend you to have a quick read on the "
                            }, {
                                type: b,
                                tag: i,
                                props: {
                                    href: "https:\u002F\u002Fdocs.npmjs.com\u002Fcreating-a-package-json-file",
                                    rel: [s, t, u],
                                    target: v
                                },
                                children: [{
                                    type: a,
                                    value: "npm documentation"
                                }]
                            }, {
                                type: a,
                                value: y
                            }]
                        }, {
                            type: a,
                            value: e
                        }, {
                            type: b,
                            tag: K,
                            props: {
                                id: aJ
                            },
                            children: [{
                                type: b,
                                tag: i,
                                props: {
                                    href: "#install-nuxt"
                                },
                                children: [{
                                    type: a,
                                    value: aK
                                }]
                            }]
                        }, {
                            type: a,
                            value: e
                        }, {
                            type: b,
                            tag: f,
                            props: {},
                            children: [{
                                type: a,
                                value: "Once the "
                            }, {
                                type: b,
                                tag: g,
                                props: {},
                                children: [{
                                    type: a,
                                    value: B
                                }]
                            }, {
                                type: a,
                                value: " has been created, add "
                            }, {
                                type: b,
                                tag: g,
                                props: {},
                                children: [{
                                    type: a,
                                    value: aL
                                }]
                            }, {
                                type: a,
                                value: " to your project via "
                            }, {
                                type: b,
                                tag: g,
                                props: {},
                                children: [{
                                    type: a,
                                    value: I
                                }]
                            }, {
                                type: a,
                                value: P
                            }, {
                                type: b,
                                tag: g,
                                props: {},
                                children: [{
                                    type: a,
                                    value: H
                                }]
                            }, {
                                type: a,
                                value: " like so below:"
                            }]
                        }, {
                            type: a,
                            value: e
                        }, {
                            type: b,
                            tag: Q,
                            props: {},
                            children: [{
                                type: b,
                                tag: j,
                                props: {},
                                children: [{
                                    type: b,
                                    tag: c,
                                    props: {
                                        className: [q]
                                    },
                                    children: [{
                                        type: a,
                                        value: R
                                    }]
                                }, {
                                    type: b,
                                    tag: k,
                                    props: {
                                        className: [l, o]
                                    },
                                    children: [{
                                        type: b,
                                        tag: m,
                                        props: {},
                                        children: [{
                                            type: b,
                                            tag: c,
                                            props: {
                                                className: [d, n]
                                            },
                                            children: [{
                                                type: a,
                                                value: H
                                            }]
                                        }, {
                                            type: a,
                                            value: r
                                        }, {
                                            type: b,
                                            tag: c,
                                            props: {
                                                className: [d, n]
                                            },
                                            children: [{
                                                type: a,
                                                value: aM
                                            }]
                                        }, {
                                            type: a,
                                            value: aN
                                        }]
                                    }]
                                }]
                            }, {
                                type: b,
                                tag: j,
                                props: {},
                                children: [{
                                    type: b,
                                    tag: c,
                                    props: {
                                        className: [q]
                                    },
                                    children: [{
                                        type: a,
                                        value: S
                                    }]
                                }, {
                                    type: b,
                                    tag: k,
                                    props: {
                                        className: [l, o]
                                    },
                                    children: [{
                                        type: b,
                                        tag: m,
                                        props: {},
                                        children: [{
                                            type: b,
                                            tag: c,
                                            props: {
                                                className: [d, n]
                                            },
                                            children: [{
                                                type: a,
                                                value: I
                                            }]
                                        }, {
                                            type: a,
                                            value: r
                                        }, {
                                            type: b,
                                            tag: c,
                                            props: {
                                                className: [d, n]
                                            },
                                            children: [{
                                                type: a,
                                                value: "install"
                                            }]
                                        }, {
                                            type: a,
                                            value: aN
                                        }]
                                    }]
                                }]
                            }, {
                                type: b,
                                tag: j,
                                props: {},
                                children: [{
                                    type: b,
                                    tag: c,
                                    props: {
                                        className: [q]
                                    },
                                    children: [{
                                        type: a,
                                        value: T
                                    }]
                                }, {
                                    type: b,
                                    tag: k,
                                    props: {
                                        className: [l, o]
                                    },
                                    children: [{
                                        type: b,
                                        tag: m,
                                        props: {},
                                        children: [{
                                            type: b,
                                            tag: c,
                                            props: {
                                                className: [d, n]
                                            },
                                            children: [{
                                                type: a,
                                                value: U
                                            }]
                                        }, {
                                            type: a,
                                            value: r
                                        }, {
                                            type: b,
                                            tag: c,
                                            props: {
                                                className: [d, n]
                                            },
                                            children: [{
                                                type: a,
                                                value: aM
                                            }]
                                        }, {
                                            type: a,
                                            value: " nuxt --shamefully-hoist\n"
                                        }]
                                    }]
                                }]
                            }]
                        }, {
                            type: a,
                            value: e
                        }, {
                            type: b,
                            tag: f,
                            props: {},
                            children: [{
                                type: a,
                                value: "This command will add "
                            }, {
                                type: b,
                                tag: g,
                                props: {},
                                children: [{
                                    type: a,
                                    value: aL
                                }]
                            }, {
                                type: a,
                                value: " as a dependency to your project and add it to your "
                            }, {
                                type: b,
                                tag: g,
                                props: {},
                                children: [{
                                    type: a,
                                    value: B
                                }]
                            }, {
                                type: a,
                                value: ". The "
                            }, {
                                type: b,
                                tag: g,
                                props: {},
                                children: [{
                                    type: a,
                                    value: "node_modules"
                                }]
                            }, {
                                type: a,
                                value: " directory will also be created which is where all your installed packages and dependencies are stored."
                            }]
                        }, {
                            type: a,
                            value: e
                        }, {
                            type: b,
                            tag: C,
                            props: {
                                type: J
                            },
                            children: [{
                                type: b,
                                tag: f,
                                props: {},
                                children: [{
                                    type: a,
                                    value: "A "
                                }, {
                                    type: b,
                                    tag: g,
                                    props: {},
                                    children: [{
                                        type: a,
                                        value: "yarn.lock"
                                    }]
                                }, {
                                    type: a,
                                    value: P
                                }, {
                                    type: b,
                                    tag: g,
                                    props: {},
                                    children: [{
                                        type: a,
                                        value: "package-lock.json"
                                    }]
                                }, {
                                    type: a,
                                    value: " is also created which ensures a consistent install and compatible dependencies of your packages installed in your project."
                                }]
                            }]
                        }, {
                            type: a,
                            value: e
                        }, {
                            type: b,
                            tag: K,
                            props: {
                                id: aO
                            },
                            children: [{
                                type: b,
                                tag: i,
                                props: {
                                    href: "#create-your-first-page"
                                },
                                children: [{
                                    type: a,
                                    value: aP
                                }]
                            }]
                        }, {
                            type: a,
                            value: e
                        }, {
                            type: b,
                            tag: f,
                            props: {},
                            children: [{
                                type: a,
                                value: "Nuxt transforms every "
                            }, {
                                type: b,
                                tag: g,
                                props: {},
                                children: [{
                                    type: a,
                                    value: "*.vue"
                                }]
                            }, {
                                type: a,
                                value: " file inside the "
                            }, {
                                type: b,
                                tag: g,
                                props: {},
                                children: [{
                                    type: a,
                                    value: aa
                                }]
                            }, {
                                type: a,
                                value: " directory as a route for the application."
                            }]
                        }, {
                            type: a,
                            value: e
                        }, {
                            type: b,
                            tag: f,
                            props: {},
                            children: [{
                                type: a,
                                value: aF
                            }, {
                                type: b,
                                tag: g,
                                props: {},
                                children: [{
                                    type: a,
                                    value: aa
                                }]
                            }, {
                                type: a,
                                value: " directory in your project:"
                            }]
                        }, {
                            type: a,
                            value: e
                        }, {
                            type: b,
                            tag: j,
                            props: {},
                            children: [{
                                type: b,
                                tag: k,
                                props: {
                                    className: [l, o]
                                },
                                children: [{
                                    type: b,
                                    tag: m,
                                    props: {},
                                    children: [{
                                        type: b,
                                        tag: c,
                                        props: {
                                            className: [d, n]
                                        },
                                        children: [{
                                            type: a,
                                            value: aE
                                        }]
                                    }, {
                                        type: a,
                                        value: " pages\n"
                                    }]
                                }]
                            }]
                        }, {
                            type: a,
                            value: e
                        }, {
                            type: b,
                            tag: f,
                            props: {},
                            children: [{
                                type: a,
                                value: "Then, create an "
                            }, {
                                type: b,
                                tag: g,
                                props: {},
                                children: [{
                                    type: a,
                                    value: ab
                                }]
                            }, {
                                type: a,
                                value: " file in the "
                            }, {
                                type: b,
                                tag: g,
                                props: {},
                                children: [{
                                    type: a,
                                    value: aa
                                }]
                            }, {
                                type: a,
                                value: " directory:"
                            }]
                        }, {
                            type: a,
                            value: e
                        }, {
                            type: b,
                            tag: j,
                            props: {},
                            children: [{
                                type: b,
                                tag: k,
                                props: {
                                    className: [l, o]
                                },
                                children: [{
                                    type: b,
                                    tag: m,
                                    props: {},
                                    children: [{
                                        type: b,
                                        tag: c,
                                        props: {
                                            className: [d, n]
                                        },
                                        children: [{
                                            type: a,
                                            value: aG
                                        }]
                                    }, {
                                        type: a,
                                        value: " pages\u002Findex.vue\n"
                                    }]
                                }]
                            }]
                        }, {
                            type: a,
                            value: e
                        }, {
                            type: b,
                            tag: f,
                            props: {},
                            children: [{
                                type: a,
                                value: "It is important that this page is called "
                            }, {
                                type: b,
                                tag: g,
                                props: {},
                                children: [{
                                    type: a,
                                    value: ab
                                }]
                            }, {
                                type: a,
                                value: " as this will be the default home page Nuxt shows when the application opens."
                            }]
                        }, {
                            type: a,
                            value: e
                        }, {
                            type: b,
                            tag: f,
                            props: {},
                            children: [{
                                type: a,
                                value: "Open the "
                            }, {
                                type: b,
                                tag: g,
                                props: {},
                                children: [{
                                    type: a,
                                    value: ab
                                }]
                            }, {
                                type: a,
                                value: " file in your editor and add the following content:"
                            }]
                        }, {
                            type: a,
                            value: e
                        }, {
                            type: b,
                            tag: j,
                            props: {},
                            children: [{
                                type: b,
                                tag: c,
                                props: {
                                    className: [q]
                                },
                                children: [{
                                    type: a,
                                    value: "pages\u002Findex.vue"
                                }]
                            }, {
                                type: b,
                                tag: k,
                                props: {
                                    className: [l, "language-html"]
                                },
                                children: [{
                                    type: b,
                                    tag: m,
                                    props: {},
                                    children: [{
                                        type: b,
                                        tag: c,
                                        props: {
                                            className: [d, A]
                                        },
                                        children: [{
                                            type: b,
                                            tag: c,
                                            props: {
                                                className: [d, A]
                                            },
                                            children: [{
                                                type: b,
                                                tag: c,
                                                props: {
                                                    className: [d, p]
                                                },
                                                children: [{
                                                    type: a,
                                                    value: x
                                                }]
                                            }, {
                                                type: a,
                                                value: aQ
                                            }]
                                        }, {
                                            type: b,
                                            tag: c,
                                            props: {
                                                className: [d, p]
                                            },
                                            children: [{
                                                type: a,
                                                value: w
                                            }]
                                        }]
                                    }, {
                                        type: a,
                                        value: Z
                                    }, {
                                        type: b,
                                        tag: c,
                                        props: {
                                            className: [d, A]
                                        },
                                        children: [{
                                            type: b,
                                            tag: c,
                                            props: {
                                                className: [d, A]
                                            },
                                            children: [{
                                                type: b,
                                                tag: c,
                                                props: {
                                                    className: [d, p]
                                                },
                                                children: [{
                                                    type: a,
                                                    value: x
                                                }]
                                            }, {
                                                type: a,
                                                value: aR
                                            }]
                                        }, {
                                            type: b,
                                            tag: c,
                                            props: {
                                                className: [d, p]
                                            },
                                            children: [{
                                                type: a,
                                                value: w
                                            }]
                                        }]
                                    }, {
                                        type: a,
                                        value: "Hello world!"
                                    }, {
                                        type: b,
                                        tag: c,
                                        props: {
                                            className: [d, A]
                                        },
                                        children: [{
                                            type: b,
                                            tag: c,
                                            props: {
                                                className: [d, A]
                                            },
                                            children: [{
                                                type: b,
                                                tag: c,
                                                props: {
                                                    className: [d, p]
                                                },
                                                children: [{
                                                    type: a,
                                                    value: aS
                                                }]
                                            }, {
                                                type: a,
                                                value: aR
                                            }]
                                        }, {
                                            type: b,
                                            tag: c,
                                            props: {
                                                className: [d, p]
                                            },
                                            children: [{
                                                type: a,
                                                value: w
                                            }]
                                        }]
                                    }, {
                                        type: a,
                                        value: e
                                    }, {
                                        type: b,
                                        tag: c,
                                        props: {
                                            className: [d, A]
                                        },
                                        children: [{
                                            type: b,
                                            tag: c,
                                            props: {
                                                className: [d, A]
                                            },
                                            children: [{
                                                type: b,
                                                tag: c,
                                                props: {
                                                    className: [d, p]
                                                },
                                                children: [{
                                                    type: a,
                                                    value: aS
                                                }]
                                            }, {
                                                type: a,
                                                value: aQ
                                            }]
                                        }, {
                                            type: b,
                                            tag: c,
                                            props: {
                                                className: [d, p]
                                            },
                                            children: [{
                                                type: a,
                                                value: w
                                            }]
                                        }]
                                    }, {
                                        type: a,
                                        value: e
                                    }]
                                }]
                            }]
                        }, {
                            type: a,
                            value: e
                        }, {
                            type: b,
                            tag: K,
                            props: {
                                id: aT
                            },
                            children: [{
                                type: b,
                                tag: i,
                                props: {
                                    href: "#start-the-project"
                                },
                                children: [{
                                    type: a,
                                    value: aU
                                }]
                            }]
                        }, {
                            type: a,
                            value: e
                        }, {
                            type: b,
                            tag: f,
                            props: {},
                            children: [{
                                type: a,
                                value: "Run your project by typing one of the following commands below in your terminal:"
                            }]
                        }, {
                            type: a,
                            value: e
                        }, {
                            type: b,
                            tag: Q,
                            props: {},
                            children: [{
                                type: b,
                                tag: j,
                                props: {},
                                children: [{
                                    type: b,
                                    tag: c,
                                    props: {
                                        className: [q]
                                    },
                                    children: [{
                                        type: a,
                                        value: R
                                    }]
                                }, {
                                    type: b,
                                    tag: k,
                                    props: {
                                        className: [l, o]
                                    },
                                    children: [{
                                        type: b,
                                        tag: m,
                                        props: {},
                                        children: [{
                                            type: b,
                                            tag: c,
                                            props: {
                                                className: [d, n]
                                            },
                                            children: [{
                                                type: a,
                                                value: H
                                            }]
                                        }, {
                                            type: a,
                                            value: Y
                                        }]
                                    }]
                                }]
                            }, {
                                type: b,
                                tag: j,
                                props: {},
                                children: [{
                                    type: b,
                                    tag: c,
                                    props: {
                                        className: [q]
                                    },
                                    children: [{
                                        type: a,
                                        value: S
                                    }]
                                }, {
                                    type: b,
                                    tag: k,
                                    props: {
                                        className: [l, o]
                                    },
                                    children: [{
                                        type: b,
                                        tag: m,
                                        props: {},
                                        children: [{
                                            type: b,
                                            tag: c,
                                            props: {
                                                className: [d, n]
                                            },
                                            children: [{
                                                type: a,
                                                value: I
                                            }]
                                        }, {
                                            type: a,
                                            value: ay
                                        }]
                                    }]
                                }]
                            }, {
                                type: b,
                                tag: j,
                                props: {},
                                children: [{
                                    type: b,
                                    tag: c,
                                    props: {
                                        className: [q]
                                    },
                                    children: [{
                                        type: a,
                                        value: T
                                    }]
                                }, {
                                    type: b,
                                    tag: k,
                                    props: {
                                        className: [l, o]
                                    },
                                    children: [{
                                        type: b,
                                        tag: m,
                                        props: {},
                                        children: [{
                                            type: b,
                                            tag: c,
                                            props: {
                                                className: [d, n]
                                            },
                                            children: [{
                                                type: a,
                                                value: U
                                            }]
                                        }, {
                                            type: a,
                                            value: Y
                                        }]
                                    }]
                                }]
                            }]
                        }, {
                            type: a,
                            value: e
                        }, {
                            type: b,
                            tag: C,
                            props: {
                                type: J
                            },
                            children: [{
                                type: b,
                                tag: f,
                                props: {},
                                children: [{
                                    type: a,
                                    value: "We use the dev command when running our application in development mode."
                                }]
                            }]
                        }, {
                            type: a,
                            value: e
                        }, {
                            type: b,
                            tag: f,
                            props: {},
                            children: [{
                                type: a,
                                value: az
                            }, {
                                type: b,
                                tag: ah,
                                props: {},
                                children: [{
                                    type: b,
                                    tag: i,
                                    props: {
                                        href: "http:\u002F\u002Flocalhost:3000\u002F",
                                        rel: [s, t, u],
                                        target: v
                                    },
                                    children: [{
                                        type: a,
                                        value: ag
                                    }]
                                }]
                            }, {
                                type: a,
                                value: y
                            }]
                        }, {
                            type: a,
                            value: e
                        }, {
                            type: b,
                            tag: f,
                            props: {},
                            children: [{
                                type: a,
                                value: "Open it in your browser by clicking the link in your terminal and you should see the text \"Hello World\" we copied in the previous step."
                            }]
                        }, {
                            type: a,
                            value: e
                        }, {
                            type: b,
                            tag: C,
                            props: {
                                type: J
                            },
                            children: [{
                                type: b,
                                tag: f,
                                props: {},
                                children: [{
                                    type: a,
                                    value: "When launching Nuxt in development mode, it will listen for file changes in most directories, so there is no need to restart the application when e.g. adding new pages"
                                }]
                            }]
                        }, {
                            type: a,
                            value: e
                        }, {
                            type: b,
                            tag: C,
                            props: {
                                type: "warning"
                            },
                            children: [{
                                type: b,
                                tag: f,
                                props: {},
                                children: [{
                                    type: a,
                                    value: "When you run the dev command it will create a .nuxt folder. This folder should be ignored from version control. You can ignore files by creating a .gitignore file at the root level and adding .nuxt."
                                }]
                            }]
                        }, {
                            type: a,
                            value: e
                        }, {
                            type: b,
                            tag: K,
                            props: {
                                id: aV
                            },
                            children: [{
                                type: b,
                                tag: i,
                                props: {
                                    href: "#bonus-step"
                                },
                                children: [{
                                    type: a,
                                    value: aW
                                }]
                            }]
                        }, {
                            type: a,
                            value: e
                        }, {
                            type: b,
                            tag: f,
                            props: {},
                            children: [{
                                type: a,
                                value: "Create a page named "
                            }, {
                                type: b,
                                tag: g,
                                props: {},
                                children: [{
                                    type: a,
                                    value: "fun.vue"
                                }]
                            }, {
                                type: a,
                                value: " in the "
                            }, {
                                type: b,
                                tag: g,
                                props: {},
                                children: [{
                                    type: a,
                                    value: aa
                                }]
                            }, {
                                type: a,
                                value: " directory."
                            }]
                        }, {
                            type: a,
                            value: e
                        }, {
                            type: b,
                            tag: f,
                            props: {},
                            children: [{
                                type: a,
                                value: "Add a "
                            }, {
                                type: b,
                                tag: g,
                                props: {},
                                children: [{
                                    type: a,
                                    value: "\u003Ctemplate\u003E\u003C\u002Ftemplate\u003E"
                                }]
                            }, {
                                type: a,
                                value: " and include a heading with a funny sentence inside."
                            }]
                        }, {
                            type: a,
                            value: e
                        }, {
                            type: b,
                            tag: f,
                            props: {},
                            children: [{
                                type: a,
                                value: "Then, go to your browser and see your new page on "
                            }, {
                                type: b,
                                tag: ah,
                                props: {},
                                children: [{
                                    type: b,
                                    tag: i,
                                    props: {
                                        href: "http:\u002F\u002Flocalhost:3000\u002Ffun",
                                        rel: [s, t, u],
                                        target: v
                                    },
                                    children: [{
                                        type: a,
                                        value: "localhost:3000\u002Ffun"
                                    }]
                                }]
                            }, {
                                type: a,
                                value: y
                            }]
                        }, {
                            type: a,
                            value: e
                        }, {
                            type: b,
                            tag: C,
                            props: {
                                type: J
                            },
                            children: [{
                                type: b,
                                tag: f,
                                props: {},
                                children: [{
                                    type: a,
                                    value: "Creating a directory named "
                                }, {
                                    type: b,
                                    tag: g,
                                    props: {},
                                    children: [{
                                        type: a,
                                        value: "more-fun"
                                    }]
                                }, {
                                    type: a,
                                    value: " and putting an "
                                }, {
                                    type: b,
                                    tag: g,
                                    props: {},
                                    children: [{
                                        type: a,
                                        value: ab
                                    }]
                                }, {
                                    type: a,
                                    value: " file inside it will give the same result as creating a "
                                }, {
                                    type: b,
                                    tag: g,
                                    props: {},
                                    children: [{
                                        type: a,
                                        value: "more-fun.vue"
                                    }]
                                }, {
                                    type: a,
                                    value: " file."
                                }]
                            }]
                        }]
                    },
                    toc: {
                        title: aX,
                        searchDepth: F,
                        depth: F,
                        links: [{
                            id: ao,
                            depth: F,
                            text: ap
                        }, {
                            id: at,
                            depth: F,
                            text: au
                        }, {
                            id: aw,
                            depth: F,
                            text: ae
                        }, {
                            id: aA,
                            depth: F,
                            text: aB,
                            children: [{
                                id: aC,
                                depth: M,
                                text: aD
                            }, {
                                id: aJ,
                                depth: M,
                                text: aK
                            }, {
                                id: aO,
                                depth: M,
                                text: aP
                            }, {
                                id: aT,
                                depth: M,
                                text: aU
                            }, {
                                id: aV,
                                depth: M,
                                text: aW
                            }]
                        }]
                    }
                },
                template: aY
            },
            templateOptions: {
                header: G,
                footer: G,
                aside: G,
                asideClass: aX,
                fluid: N,
                banner: G
            },
            _img: {
                "/_ipx/https://github.com/atinux.png%3Fsize=32": "\u002F_nuxt\u002Fimage\u002F841744.png",
                "/_ipx/https://github.com/nazarepiedady.png%3Fsize=32": "\u002F_nuxt\u002Fimage\u002Fd5c785.png",
                "/_ipx/https://github.com/nobuaki0331.png%3Fsize=32": "\u002F_nuxt\u002Fimage\u002F888ba6.png",
                "/_ipx/https://github.com/KawaneRio.png%3Fsize=32": "\u002F_nuxt\u002Fimage\u002F345a82.png",
                "/_ipx/https://github.com/palmiak.png%3Fsize=32": "\u002F_nuxt\u002Fimage\u002F2bdab1.png",
                "/_ipx/https://github.com/hacknug.png%3Fsize=32": "\u002F_nuxt\u002Fimage\u002Fb6ef28.png",
                "/_ipx/https://github.com/danielroe.png%3Fsize=32": "\u002F_nuxt\u002Fimage\u002F0786f3.png",
                "/_ipx/https://github.com/g1eny0ung.png%3Fsize=32": "\u002F_nuxt\u002Fimage\u002F40c994.png",
                "/_ipx/https://github.com/JeronimasDargis.png%3Fsize=32": "\u002F_nuxt\u002Fimage\u002Fba9a98.png",
                "/_ipx/https://github.com/clemcode.png%3Fsize=32": "\u002F_nuxt\u002Fimage\u002F77339c.png",
                "/_ipx/https://github.com/manniL.png%3Fsize=32": "\u002F_nuxt\u002Fimage\u002F073577.png",
                "/_ipx/https://github.com/n3-rd.png%3Fsize=32": "\u002F_nuxt\u002Fimage\u002F20bdf5.png",
                "/_ipx/https://github.com/adrienZ.png%3Fsize=32": "\u002F_nuxt\u002Fimage\u002Fc3f019.png",
                "/_ipx/https://github.com/hicugi.png%3Fsize=32": "\u002F_nuxt\u002Fimage\u002F1fe278.png",
                "/_ipx/https://github.com/signalwerk.png%3Fsize=32": "\u002F_nuxt\u002Fimage\u002Fc3653a.png",
                "/_ipx/https://github.com/obulat.png%3Fsize=32": "\u002F_nuxt\u002Fimage\u002Fe50af3.png",
                "/_ipx/https://github.com/gabrielpaivadev.png%3Fsize=32": "\u002F_nuxt\u002Fimage\u002Fea02f0.png",
                "/_ipx/https://github.com/loilo.png%3Fsize=32": "\u002F_nuxt\u002Fimage\u002Fee31ca.png",
                "/_ipx/https://github.com/svedova.png%3Fsize=32": "\u002F_nuxt\u002Fimage\u002Fd403a7.png",
                "/_ipx/https://github.com/hijack401.png%3Fsize=32": "\u002F_nuxt\u002Fimage\u002Fadd3e2.png",
                "/_ipx/https://github.com/Viniciusadm.png%3Fsize=32": "\u002F_nuxt\u002Fimage\u002Fba75e5.png",
                "/_ipx/https://github.com/KareemDa.png%3Fsize=32": "\u002F_nuxt\u002Fimage\u002Fc79dfa.png",
                "/_ipx/https://github.com/valentincostam.png%3Fsize=32": "\u002F_nuxt\u002Fimage\u002F3dd0d7.png",
                "/_ipx/https://github.com/skiniks.png%3Fsize=32": "\u002F_nuxt\u002Fimage\u002Fec2d86.png",
                "/_ipx/https://github.com/alhirzel.png%3Fsize=32": "\u002F_nuxt\u002Fimage\u002F980fb6.png",
                "/_ipx/https://github.com/ajeetchaulagain.png%3Fsize=32": "\u002F_nuxt\u002Fimage\u002F2fb9d1.png",
                "/_ipx/https://github.com/katerlouis.png%3Fsize=32": "\u002F_nuxt\u002Fimage\u002Fddfbaa.png",
                "/_ipx/https://github.com/nicodevs.png%3Fsize=32": "\u002F_nuxt\u002Fimage\u002F5fa1fe.png",
                "/_ipx/https://github.com/raimuhammad26.png%3Fsize=32": "\u002F_nuxt\u002Fimage\u002F76bed9.png",
                "/_ipx/https://github.com/NaokiHamada.png%3Fsize=32": "\u002F_nuxt\u002Fimage\u002F475300.png",
                "/_ipx/https://github.com/a-toms.png%3Fsize=32": "\u002F_nuxt\u002Fimage\u002Faae9cc.png",
                "/_ipx/https://github.com/yannaufray.png%3Fsize=32": "\u002F_nuxt\u002Fimage\u002F305a71.png",
                "/_ipx/https://github.com/anthonychu.png%3Fsize=32": "\u002F_nuxt\u002Fimage\u002F027d85.png",
                "/_ipx/https://github.com/nuzhat-minhaz.png%3Fsize=32": "\u002F_nuxt\u002Fimage\u002F431077.png",
                "/_ipx/https://github.com/l-portet.png%3Fsize=32": "\u002F_nuxt\u002Fimage\u002F260cbe.png",
                "/_ipx/https://github.com/richardeschloss.png%3Fsize=32": "\u002F_nuxt\u002Fimage\u002F7f63ae.png",
                "/_ipx/https://github.com/xanzhu.png%3Fsize=32": "\u002F_nuxt\u002Fimage\u002F42cdae.png",
                "/_ipx/https://github.com/BenoitPotty.png%3Fsize=32": "\u002F_nuxt\u002Fimage\u002Fecc096.png",
                "/_ipx/https://github.com/antony-k1208.png%3Fsize=32": "\u002F_nuxt\u002Fimage\u002F1434b0.png",
                "/_ipx/https://github.com/hibariya.png%3Fsize=32": "\u002F_nuxt\u002Fimage\u002Ffebb5a.png",
                "/_ipx/https://github.com/jose-seabra.png%3Fsize=32": "\u002F_nuxt\u002Fimage\u002Fede04e.png",
                "/_ipx/https://github.com/talentedunicorn.png%3Fsize=32": "\u002F_nuxt\u002Fimage\u002Ff22c13.png",
                "/_ipx/https://github.com/florian-lefebvre.png%3Fsize=32": "\u002F_nuxt\u002Fimage\u002Fe3705e.png",
                "/_ipx/https://github.com/RecoX.png%3Fsize=32": "\u002F_nuxt\u002Fimage\u002F8cdc5c.png",
                "/_ipx/https://github.com/MrZyr0.png%3Fsize=32": "\u002F_nuxt\u002Fimage\u002F40a795.png"
            }
        }],
        fetch: {
            "AppLayout:0": {
                headerLinks: [{
                    title: "Discover",
                    items: [{
                        title: "Showcases",
                        subtitle: "Selection of websites built with Nuxt",
                        slug: "showcases",
                        href: aZ,
                        icon: "showcases.svg",
                        color: "bg-sand"
                    }, {
                        title: "Case studies",
                        subtitle: "How companies use Nuxt",
                        slug: "case-studies",
                        href: "https:\u002F\u002Fnuxtlabs.com\u002Fblog?category=case-studies",
                        icon: "case-studies.svg",
                        color: "bg-sand-dark"
                    }, {
                        title: a_,
                        subtitle: "What they think about us",
                        slug: "testimonials",
                        to: "\u002Ftestimonials",
                        icon: "testimonials.svg",
                        color: "bg-sand-darker"
                    }]
                }, {
                    title: "Learn",
                    items: [{
                        title: aY,
                        subtitle: "Create fast websites easily",
                        slug: "docs",
                        to: a$,
                        icon: "docs.svg",
                        color: "bg-green-500"
                    }, {
                        title: ba,
                        subtitle: "Understand everything in Nuxt",
                        slug: "examples",
                        to: bb,
                        icon: "examples.svg",
                        color: "bg-green-600"
                    }, {
                        title: bc,
                        subtitle: "Learn with concrete cases",
                        slug: "tutorials",
                        to: bd,
                        icon: "tutorials.svg",
                        color: "bg-green-700"
                    }, {
                        title: ac,
                        subtitle: ai,
                        href: ad,
                        icon: aj,
                        color: ak
                    }]
                }, {
                    title: "Explore",
                    items: [{
                        title: be,
                        subtitle: "How to Deploy Nuxt",
                        slug: "deployments",
                        to: bf,
                        icon: "deployments.svg",
                        color: "bg-indigo-light"
                    }, {
                        title: bg,
                        subtitle: "Extend the power of Nuxt",
                        href: bh,
                        icon: "modules.svg",
                        color: "bg-indigo"
                    }, {
                        title: bi,
                        subtitle: "Get started with themes",
                        slug: "themes",
                        to: bj,
                        icon: "themes.svg",
                        color: "bg-indigo-dark"
                    }, {
                        title: "Video Courses",
                        subtitle: "Learn step by step",
                        slug: "video-courses",
                        to: "\u002Fvideo-courses",
                        icon: "video-courses.svg",
                        color: "bg-indigo-darker"
                    }]
                }, {
                    title: "Community",
                    items: [{
                        title: bk,
                        subtitle: "Latest news about Nuxt",
                        slug: "announcements",
                        href: bl,
                        icon: "announcements.svg",
                        color: "bg-mint-lighter"
                    }, {
                        title: bm,
                        subtitle: "They are Nuxt",
                        slug: "teams",
                        to: bn,
                        icon: "teams.svg",
                        color: "bg-mint-light"
                    }, {
                        title: bo,
                        subtitle: "All the code we have released",
                        slug: "releases",
                        to: bp,
                        icon: "releases.svg",
                        color: "bg-mint"
                    }, {
                        title: bq,
                        subtitle: "They trust us",
                        slug: "sponsors",
                        href: br,
                        icon: "sponsors.svg",
                        color: "bg-mint-dark"
                    }]
                }, {
                    title: "Partners",
                    slug: "partners",
                    href: bs
                }],
                footerLinks: [{
                    title: "About",
                    items: [{
                        title: "Contact us",
                        href: "mailto:hello@nuxtjs.com"
                    }, {
                        title: "Enterprise support",
                        href: "https:\u002F\u002Fnuxt.com\u002Fenterprise\u002Fsupport"
                    }, {
                        title: "NuxtLabs company",
                        href: "https:\u002F\u002Fnuxtlabs.com\u002F"
                    }, {
                        title: "Open Source Software",
                        href: "https:\u002F\u002Fgithub.com\u002Fnuxt"
                    }, {
                        title: "Partnerships",
                        href: bs
                    }, {
                        title: "Telemetry",
                        href: "https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"
                    }]
                }, {
                    title: "Ecosystem",
                    items: [{
                        title: bk,
                        href: bl
                    }, {
                        title: "Contribute",
                        to: "\u002Fcontribution-guide"
                    }, {
                        title: "Chat with us",
                        href: "https:\u002F\u002Fdiscord.nuxt.dev\u002F"
                    }, {
                        title: "Events",
                        to: "\u002Fevents"
                    }, {
                        title: bq,
                        href: br
                    }, {
                        title: bm,
                        to: bn
                    }, {
                        title: bc,
                        to: bd
                    }, {
                        title: "Video courses",
                        to: "\u002Fvideo-courses\u002F"
                    }]
                }, {
                    title: "Resources",
                    items: [{
                        title: "Design",
                        href: "https:\u002F\u002Fnuxt.com\u002Fdesign-kit"
                    }, {
                        title: "Documentation",
                        to: a$
                    }, {
                        title: ba,
                        to: bb
                    }, {
                        title: be,
                        to: bf
                    }, {
                        title: ac,
                        href: ad
                    }, {
                        title: bg,
                        href: bh
                    }, {
                        title: bo,
                        to: bp
                    }, {
                        title: "Showcase",
                        href: aZ
                    }, {
                        title: bi,
                        to: bj
                    }]
                }],
                showCookieBanner: N
            },
            "AsideBottom:0": {
                lastRelease: bt,
                masterCoursesLink: {
                    title: ac,
                    subtitle: ai,
                    href: ad,
                    icon: aj,
                    color: ak
                }
            },
            "AsideBottom:1": {
                lastRelease: bt,
                masterCoursesLink: {
                    title: ac,
                    subtitle: ai,
                    href: ad,
                    icon: aj,
                    color: ak
                }
            },
            "Docs:0": {
                repoUrl: "https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fwebsite-v2",
                prev: {
                    slug: "going-full-static",
                    to: "\u002Fannouncements\u002Fgoing-full-static",
                    title: "Going Full Static"
                },
                next: {
                    slug: "hello-world",
                    to: "\u002Fexamples\u002Frouting\u002Fhello-world",
                    title: "Hello World"
                }
            },
            "EditOnGithub:0": {
                link: "https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fwebsite-v2\u002Fedit\u002Fmain\u002Fcontent\u002Fen\u002Fdocs\u002F1.get-started\u002F1.installation.md",
                contributors: [{
                    name: "Sébastien Chopin",
                    avatarUrl: "https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F904724?u=c6c29f476e8aced6f47a2edcf057f83ceaeddade&v=4",
                    login: "atinux"
                }, {
                    name: "Nazaré da Piedade",
                    avatarUrl: "https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F31008635?u=8dc25777dc9cb51fb0dbba2f137988953d330b78&v=4",
                    login: "nazarepiedady"
                }, {
                    name: "Nobu",
                    avatarUrl: "https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F50097614?u=9cef125484e08bb825072f0c74858ee6b55b1792&v=4",
                    login: "nobuaki0331"
                }, {
                    name: "川音리오",
                    avatarUrl: "https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F61252570?u=3cd15ddc716786275b9b0af81d9fb94fca643282&v=4",
                    login: "KawaneRio"
                }, {
                    name: "Maciek Palmowski",
                    avatarUrl: "https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F2342458?v=4",
                    login: "palmiak"
                }, {
                    name: "Nestor Vera",
                    avatarUrl: "https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1107521?v=4",
                    login: "hacknug"
                }, {
                    name: "Daniel Roe",
                    avatarUrl: "https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F28706372?u=c4a5aa5232c09c3248533366d5c93a138d7e8987&v=4",
                    login: "danielroe"
                }, {
                    name: "Yue Yang",
                    avatarUrl: "https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F15034155?u=4eedea718509ef248c3b74c985ba34cf21f249ed&v=4",
                    login: "g1eny0ung"
                }, {
                    name: "Jeronimas",
                    avatarUrl: "https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F46685018?u=261efc26368de5a6165bd61ec0971fc0d8d66dfd&v=4",
                    login: "JeronimasDargis"
                }, {
                    name: "Clément Ollivier",
                    avatarUrl: "https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1439623?u=674a9e28e5bab7c584058d5be3e86117d5c16d64&v=4",
                    login: "clemcode"
                }, {
                    name: "Alexander Lichter",
                    avatarUrl: "https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F640208?u=8103e364cbb1c0892c0cbe6831eef0dbcb6aff6b&v=4",
                    login: "manniL"
                }, {
                    name: "N3-rd",
                    avatarUrl: "https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F56776094?u=8d5f18fdf25833586b2b979cb59b048fa6655a15&v=4",
                    login: "n3-rd"
                }, {
                    name: "Adrien Zaganelli",
                    avatarUrl: "https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F10186993?u=08189ef8cf708a61445b6a57cf7a2aa361d484af&v=4",
                    login: "adrienZ"
                }, {
                    name: "Mag",
                    avatarUrl: "https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F16819882?u=2f3f25e772566cc66581a1d41c84681aa4f2d812&v=4",
                    login: "hicugi"
                }, {
                    name: "Stefan Huber",
                    avatarUrl: "https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F992878?v=4",
                    login: "signalwerk"
                }, {
                    name: "Olga Bulat",
                    avatarUrl: "https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F15233243?v=4",
                    login: "obulat"
                }, {
                    name: "Paiva",
                    avatarUrl: "https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1836254?u=347cb6d791b6655c27c7e00700e5e6a01782bc70&v=4",
                    login: "gabrielpaivadev"
                }, {
                    name: "Florian Reuschel",
                    avatarUrl: "https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1922624?u=e6ce3b98e98ffc13dc6a2df7238f7b1da49ce4a3&v=4",
                    login: "loilo"
                }, {
                    name: "Savas Vedova",
                    avatarUrl: "https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F3321893?u=c79adb639ea9d73ef785b463aef5bf3a33fd1947&v=4",
                    login: "svedova"
                }, {
                    name: "HIJACK",
                    avatarUrl: "https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F36703601?u=54ac1ebfdaae9d39b5e9f84c5ff4f95217766e9b&v=4",
                    login: "hijack401"
                }, {
                    name: "Vinícius Alves",
                    avatarUrl: "https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F59889070?v=4",
                    login: "Viniciusadm"
                }, {
                    name: "Kareem Dabbeet",
                    avatarUrl: "https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F42810389?u=618ea45a53bdd708c7382c52ad25bd1af2c3e53f&v=4",
                    login: "KareemDa"
                }, {
                    name: "Valentín Costa",
                    avatarUrl: "https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F10326208?u=79a9c73b9f96d53b409aa5fd77a248435e7ae0a7&v=4",
                    login: "valentincostam"
                }, {
                    name: "Ryan Skinner",
                    avatarUrl: "https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F8646557?u=21f86e722be20c33ab4b205db153eaeae9f93ad1&v=4",
                    login: "skiniks"
                }, {
                    name: "Alex Hirzel",
                    avatarUrl: "https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F324152?u=e6f2ab59a25ced4613abaeda6c74eafcc15a5f53&v=4",
                    login: "alhirzel"
                }, {
                    name: "Ajeet Chaulagain",
                    avatarUrl: "https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6622655?u=8b3b772de6655d36c0429ff2432708cc8b3fb321&v=4",
                    login: "ajeetchaulagain"
                }, {
                    name: "René Eschke",
                    avatarUrl: "https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1983382?u=92e94d7eee7aaceb3818c08b65a6b0879725eed1&v=4",
                    login: "katerlouis"
                }, {
                    name: "Nico Devs",
                    avatarUrl: "https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F3766839?u=b97aba68f5c488c05c6c5f587587965a03bd7d32&v=4",
                    login: "nicodevs"
                }, {
                    name: "Muhammad",
                    avatarUrl: "https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F40832735?u=6d285d2303bd3a4a0ac5f4843e760004cf729b26&v=4",
                    login: "raimuhammad26"
                }, {
                    name: "Naoki Hamada",
                    avatarUrl: "https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F20796720?v=4",
                    login: "NaokiHamada"
                }, {
                    name: "Tom",
                    avatarUrl: "https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F46689196?u=594b6198ad5248f9547e325bd3b8784bc785b699&v=4",
                    login: "a-toms"
                }, {
                    name: "Yann Aufray",
                    avatarUrl: "https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F70212709?v=4",
                    login: "yannaufray"
                }, {
                    name: "Anthony Chu",
                    avatarUrl: "https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F3982077?u=8bbebac42cb84a25c629f83f212b2d099ffa3964&v=4",
                    login: "anthonychu"
                }, {
                    name: "Nuzhat Minhaz",
                    avatarUrl: "https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F60846613?u=37ede809452c23e2fdd91800174cb004bc8556a5&v=4",
                    login: "nuzhat-minhaz"
                }, {
                    name: "Lucas Portet",
                    avatarUrl: "https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F34057690?u=f600e17913d2a824c7bb80d9a26348e29b2444a8&v=4",
                    login: "l-portet"
                }, {
                    name: "Richard Schloss",
                    avatarUrl: "https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F5906351?u=488170547089a52b78f08b9142960ea5fa0bfaea&v=4",
                    login: "richardeschloss"
                }, {
                    name: "Bobby",
                    avatarUrl: "https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F34955679?u=d389de62900c5fbc528efa894ebedc9977613b75&v=4",
                    login: "xanzhu"
                }, {
                    name: "bpy",
                    avatarUrl: "https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F21122440?u=408698f160fc104791666fd21e048b7834617725&v=4",
                    login: "BenoitPotty"
                }, {
                    name: "Antony Konstantinidis",
                    avatarUrl: "https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F4183726?u=6b50a8ea16de29d2982f43c5640b1db9299ebcd1&v=4",
                    login: "antony-k1208"
                }, {
                    name: "Hibariya",
                    avatarUrl: "https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F43346?u=f78a01904de85046519960fcece2a53ecb4bd7a4&v=4",
                    login: "hibariya"
                }, {
                    name: "Jose Seabra",
                    avatarUrl: "https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F55154249?u=851223f7bdecf499ffd19e3bc54bc9dfb0eeb0b6&v=4",
                    login: "jose-seabra"
                }, {
                    name: "Eze",
                    avatarUrl: "https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F904501?u=cafaa64b4ccd51e9e63f0134fc80721985dd69a0&v=4",
                    login: "talentedunicorn"
                }, {
                    name: "Florian Lefebvre",
                    avatarUrl: "https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F69633530?u=e2ef3f44db480e30e0e7fe90aa559d3c39fac7e6&v=4",
                    login: "florian-lefebvre"
                }, {
                    name: "Lucas Recoaro",
                    avatarUrl: "https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F5874806?u=be4a26184b2865c30336b6270f4a4535be21f43c&v=4",
                    login: "RecoX"
                }, {
                    name: "Julien SEIXAS",
                    avatarUrl: "https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F32927775?u=a6f840c2f9021d6616d7cf75a6ed0c962bbfaefb&v=4",
                    login: "MrZyr0"
                }]
            },
            _lazyComponents: new Set(["ProseParagraph", "AppButton", "HomeHero", "ProseEm", "HomeLearnMaster", "SectionContentItem", "ProseHr", "HomeFeatures", "HomePartnersCard", "HomeDiscoverPartners", "HomeLearnGuides", "HomeExplore", "HomeCommunity", a_, "HomeTestimonials", "ProseH1", "ProseA", "ProseH2", "Alert", "ProseStrong", "ThemesList", "VideoCoursesList", "PageHero", "TeamSection", "ProseBlockquote", "ProseH3", "ProseLi", "ProseCodeInline", "ProseUl", "ProseCode", "ProseTh", "ProseTr", "ProseThead", "ProseTd", "ProseTbody", "ProseTable", "ProseOl", "VideoPlayer", "CodeGroup", "ProseH4", "PartnersBottomHero", "PartnersSection", "BarChartCacheBuild"])
        },
        mutations: []
    }
}("text", "element", "span", "token", "\n", "prose-paragraph", "prose-code-inline", "operator", "prose-a", "prose-code", "pre", "line-numbers", "code", "function", "language-bash", "punctuation", "filename", " ", "nofollow", "noopener", "noreferrer", "_blank", "\u003E", "\u003C", ".", "project-name", "tag", "package.json", "alert", "property", ":", 2, true, "yarn", "npm", "info", "prose-h3", "string", 3, false, "prose-h2", " or ", "code-group", "Yarn", "NPM", "PNPM", "pnpm", "builtin", "class-name", "cd", " dev\n", "\n  ", ",", "\n    ", "pages", "index.vue", "Master courses", "https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite", "Using create-nuxt-app", "prose-li", "http:\u002F\u002Flocalhost:3000", "prose-strong", "Learn more with experts", "master-courses.svg", "bg-green-800", "installation", "Installation", "Here, you will find information on setting up and running a Nuxt project in 4 steps.", "online-playground", "Online playground", "app-button", "true", "small", "prerequisites", "Prerequisites", "prose-em", "using-create-nuxt-app", " create nuxt-app ", " run dev\n", "The application is now running on ", "manual-installation", "Manual Installation", "set-up-your-project", "Set up your project", "mkdir", "Create the ", "touch", "{", "}", "install-nuxt", "Install Nuxt", "nuxt", "add", " nuxt\n", "create-your-first-page", "Create your first page", "template", "h1", "\u003C\u002F", "start-the-project", "Start the project", "bonus-step", "Bonus step", "", "Docs", "https:\u002F\u002Fnuxt.com\u002Fshowcase", "Testimonials", "\u002Fdocs", "Examples", "\u002Fexamples", "Tutorials", "\u002Ftutorials", "Deployments", "\u002Fdeployments", "Modules", "https:\u002F\u002Fnuxt.com\u002Fmodules", "Themes", "\u002Fthemes", "Announcements", "https:\u002F\u002Fnuxt.com\u002Fblog", "Teams", "\u002Fteams", "Releases", "\u002Freleases", "Sponsors", "https:\u002F\u002Fnuxt.com\u002Fenterprise\u002Fsponsors", "https:\u002F\u002Fnuxt.com\u002Fenterprise\u002Fagencies", "v3.12.4")));