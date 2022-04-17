---
id: learning
title: یادگیری
hide_title: false
hide_table_of_contents: false
sidebar_label: یادگیری
sidebar_position: 40
pagination_label: یادگیری
# custom_edit_url: https://bsamadi.github.io/coding/docs/github.md
description: دانش‌آموز در یادگیری نقش اصلی را دارد.
keywords:
  - یادگیری
  - Markdown
image: "img/logo.svg"
slug: /learning
---

# سرنخ‌ها

## EdTech

* [Top tools for learning](https://www.toptools4learning.com/)
* [Digital Promise](https://digitalpromise.org/initiative/instructional-coaching/instructional-coaching-playbook/about-this-playbook/)
* [Self-hosted learning and courses](https://github.com/awesome-selfhosted/awesome-selfhosted#learning-and-courses)
* [Awesome EdTech Tools](https://github.com/hkalant/awesome-edtech-tools)
* [Ethical EdTech](https://ethicaledtech.info)
* [Addressing the Decline of Open Source LMS](https://philonedtech.com/addressing-the-decline-of-open-source-lms-for-altc-discussion/)

## Learning Platforms

* [Thinkific](https://www.thinkific.com/)
* [Kajabi](https://kajabi.com/)
* [Moodle vs Canvas](https://edwiser.org/blog/moodle-vs-canvas/)

### Canadian

* [D2L](https://www.d2l.com/)
* [Thinkific](https://www.thinkific.com/)
* [BigBlueButton](https://bigbluebutton.org/)
* [Top Hat](https://tophat.com/)
* [Chalk](https://www.chalk.com/)
* [Disco](https://www.disco.co/)

### American

* [Canvas](https://www.instructure.com/canvas)
* [North American Higher Ed LMS Market Share by Enrollments: A consolidating market](https://eliterate.us/na-he-lms-market-share-enrollments-for-2012-2018/)

## Hackathons
* [Ultrahack](https://ultrahack.org/)

## Research

* [KMI](http://kmi.open.ac.uk/projects/)

## eLearning
*   [ITCR_Documentation_and_Usability](https://jhudatascience.org/ITCR_Documentation_and_Usability/index.html)
*   [Computing Education Research Blog](https://computinged.wordpress.com/)
*   [Walking Randomly](http://www.walkingrandomly.com/)

## Universities

* [eLearning at MIT](https://openlearning.mit.edu/)
* [UCFopen](https://github.com/ucfopen)
* [Open Source University](https://github.com/OpenSourceUniversity)

## Companies

* [Amplify](https://amplify.com/)
* [Mathigon](https://mathigon.org/)
* [ELAN e.V.](https://elan-ev.de/)

## Standards

*   [Learning Tools Interoperability](https://www.imsglobal.org/activity/learning-tools-interoperability)
*   [Moodle and LTI](https://moodle.com/news/what-is-lti-and-how-it-can-improve-your-learning-ecosystem/)
*   [SCORM vs LTI](https://rusticisoftware.com/blog/scorm-vs-lti/)
*   [Creating SCORM Content](https://docs.moodle.org/311/en/Creating_SCORM_Content)
*   [Awesome LTI](https://github.com/scollovati/awesome-lti)

## eLearning Apps

* [eduappcenter.com](https://www.eduappcenter.com/)
* [Sagefy](https://github.com/sagefy/sagefy)

## Online schools
* [Synthesis](https://www.synthesis.is/)

## Assessment

* [OK](https://github.com/okpy/ok)

## Knowledge Management System

*   [Awesome knowledge management](https://github.com/brettkromkamp/awesome-knowledge-management)
*   [Gardening Tools](https://github.com/MaggieAppleton/digital-gardeners)
*   [Notion](https://www.notion.so/)
*   [Fibery](https://fibery.io/)
*   [Roam](https://roamresearch.com/)
*   [Capiche](https://capiche.com/)
*   [Gatsby theme brain](https://github.com/aengusmcmillin/gatsby-theme-brain)
*   [Tiddlywiki](https://tiddlywiki.com/)
*   [Learning Tools Interoperability](https://en.wikipedia.org/wiki/Learning_Tools_Interoperability)

## Authoring Tools

* [Adapt Learning](https://github.com/adaptlearning)
* [eXe Learning](https://github.com/exelearning)
* [DaSL course template bookdown](https://github.com/jhudsl/DaSL_Course_Template_Bookdown)
* [Jupyter4edu](https://jupyter4edu.github.io/jupyter-edu-book/)
* [Authorea](https://www.authorea.com)
* [Scalar](https://scalar.me/anvc/features/overview/)
* [Introducing Manuscripts.io](https://www.ncbi.nlm.nih.gov/books/NBK540955/)
* [Manuscripts.io](https://www.manuscripts.io)
* [Remarqable](https://www.remarqable.com/web/index.html)
* [Scitrus](https://www.scitrus.com/welcome)
* [Synchronized editing: the future of collaborative writing](https://www.nature.com/articles/d41586-020-00916-6)
* [Mathigon Studio](https://mathigon.io/studio/)

## Employee Training System

* [Learning Locker](https://docs.learninglocker.net/welcome/)

## Learning Management Systems

* [Up2U](https://up2u.readthedocs.io/)
* [Courselit](https://github.com/recurzery/courselit)
* [edapp](https://www.edapp.com/)
* [GARR](https://cloud.garr.it/)
* [GARR Charms](https://git.garr.it/cloud/charms)
* [Digital Democratic](https://gitlab.com/digitaldemocratic/digitaldemocratic/-/blob/master/README_en.md)
* [The Simon Initiative](https://www.cmu.edu/simon/)

### CERN

* [CERNBox](https://github.com/cernbox)
* [ScienceBox](https://sciencebox.web.cern.ch/sciencebox/)
* [ScienceMesh](https://sciencemesh.io/)

### Open Learning Initiative

* [OLI Torus](https://proton.oli.cmu.edu/)
* [Affiliated projects](https://www.cmu.edu/simon/projects/affiliated-projects.html)

### Up2U

* [Up to University](https://up2university.eu/up2universe/)
* [filesystem-for-jupyter](https://github.com/sciencemesh/filesystem-for-jupyter)

* [Setting up SSL for Keycloak](https://www.keycloak.org/docs/latest/server_installation/#_setting_up_ssl)
Make a server and add an A record for auth.mechatronics3d.com and put the IP address of the server as the value. Run these commands in the keycloak server:

  * `curl -s "https://get.sdkman.io" | bash`
  * Open a new terminal
  * `sdk list java`
  * `sdk install java 11.0.11-open`
  * Generate a certificate: `keytool -genkey -alias localhost -keyalg RSA -keystore keycloak.jks -validity 10950`
  * Get a certificate: `keytool -certreq -alias yourdomain -keystore keycloak.jks > keycloak.careq`
  * `sudo snap install --classic certbot`
  * `sudo ln -s /snap/bin/certbot /usr/bin/certbot`
  * `certbot certonly --standalone -d auth.mechatronics3d.com` ([gist](https://gist.github.com/bsamadi/541bd6ced11111a251ecfd494dd30694))
  * `wget https://letsencrypt.org/certs/isrgrootx1.pem`
  * `keytool -import -keystore keycloak.jks -file isrgrootx1.pem -alias root`
  * `keytool -import -alias auth.mechatronics3d.com -keystore keycloak.jks -file /etc/letsencrypt/live/auth.mechatronics3d.com/fullchain.pem`
  * [Juju Keycloak](https://jaas.ai/u/tengu-team/keycloak/2)

### Moodle

* [docker-moodle](https://hub.docker.com/r/up2university/moodle)
* [Installing Moodle with Kubernetes by Bitnami](https://bitnami.com/stack/moodle/helm)
* [How to Create an LMS Educational Website like UCLA with WordPress & Moodle 2021 - Moodle Tutorial](https://www.youtube.com/watch?v=df5hfVID5mo)
* [Moodle on Cloud by Cognosys](https://secureanycloud.com/moodle-technical-support-cloud-help-azure-aws-opensource-cognosys/)
* [Moodle k8s](https://github.com/jlabusch/moodle-k8s)
* [Kubernetes Moodle](https://github.com/mfabriczy/kubernetes-moodle)
* [Moodle operator](https://github.com/Netzlink/moodle-operator)
* [Juju Moodle by GARR](https://jaas.ai/u/csd-garr/moodle/12)
* [Juju Moodle Base by GARR](https://jaas.ai/u/csd-garr/moodle-base/bundle/2)
* [Moosh](https://github.com/tmuras/moosh)
* [Site Stuck at Upgrade](https://www.moodlewiki.com/books/troubleshooting/page/site-stuck-at-upgrade)
* [Azure Moodle](https://github.com/Azure/Moodle)
* [Login Moodle with Keycloak OAuth2](https://kursat.github.io/#/post/2021-03-11-moodle-keycloak-oauth2-integration.md)

### Mahara

* [Mahara.org](https://mahara.org/)
* [Mahoodle: Mahara and Moodle](https://wiki.mahara.org/images/d/d5/Mahoodle.pdf)

### EdX

* [EdX Lilac](https://edx.readthedocs.io/projects/open-edx-release-notes/en/latest/lilac.html)
* [EdX Lilac on Confluence](https://openedx.atlassian.net/wiki/spaces/COMM/pages/2023915819/Lilac)
* [EdX by Tutor](https://docs.tutor.overhang.io/index.html)
* [EdX by Bitnami](https://bitnami.com/stack/edx/cloud)
* [EdX ecommerce](https://github.com/edx/ecommerce)

### Sakai

* [Sakai](https://www.sakailms.org/)

### ILIAS

* [ILIAS](https://www.ilias.de/en/)

### OPEN edX
* [OPEN edX: Architecture and Engineering](https://openedx.atlassian.net/wiki/spaces/AC/overview?homepageId=7766132)

#### Kubernetes

* [Tutor: kubernetes deployment](https://docs.tutor.overhang.io/k8s.html)
* [Grove](https://grove.opencraft.com/)

#### EdX Deployment

* [Open EdX deployment](https://openedx-deployment.doc.opencraft.com/en/latest/)
* Tutor: view the configuration file: `cat "$(tutor config printroot)/config.yml"`
* Tutor: set configuration parameters: `tutor config save --set PARAM1=VALUE1 --set PARAM2=VALUE2`
* Tutor: `tutor config save --set RUN_SMTP=false --set SMTP_HOST=smtp.gmail.com --set SMTP_PORT=587 --set SMTP_USERNAME=mechatronics3d.academy --set SMTP_PASSWORD=123 --set SMTP_USE_TLS=true`
* Tutor: print a configuration parameter: `tutor config printvalue RUN_SMTP`
* Tutor: logs of a specific service: `tutor local logs --follow smtp`
* [Tutor: Open edX on AWS EKS](https://rajputvaibhav.medium.com/open-edx-on-aws-eks-382419ca0865)

#### EdX eCommerce

* [edx-ecommerce](https://edx-ecommerce.readthedocs.io/en/latest/index.html)
* [Oscar](https://github.com/django-oscar/django-oscar)
* [EdX Shopify](https://github.com/hastexo/edx-shopify)

#### EdX Forums

* [EdX Discuss](https://discuss.openedx.org/)
* [Tutor and Open EdX Discuss](https://discuss.overhang.io/)

#### EdX and SMTP

* [timeout](https://sibunglon.com/2020/07/26/solve-smtp-open-edx-timeout/)
* [SMTP setup](https://blog.lawrencemcdaniel.com/open-edx-setup-smtp-email/)
* [namshi SMTP docker](https://github.com/namshi/docker-smtp)

### Tsugi Cloud

* [Tsugi Cloud](https://www.tsugicloud.org/tsugi/store/)

### WordPress

* [LearnPress](https://thimpress.com/learnpress-plugin/)

## Video Conferencing

* [EduMeet](https://edumeet.org/)
* [Jitsi](https://jitsi.org/)
* [BigBlueButton](https://bigbluebutton.org/)
  * [Book keeping: third party integrations](https://github.com/bigbluebutton/bigbluebutton.github.io/issues/192)
  * [BBBatScale](https://gitlab.com/bbbatscale/bbbatscale/-/blob/master/GettingStarted.md)
  * [BBB bot](https://github.com/mconf/bigbluebot)
  * [BigBlueButton Load Balancer](https://b3lb.io/)
  * [NextCloud BBB](https://github.com/sualko/cloud_bbb/)
* [Opencast](https://opencast.org/)
  * [PyCA](https://github.com/opencast/pyCA)

## Online course templates

*   [Gatsby, Reveal.js and Binder](https://github.com/ines/course-starter-python)

## Tools

*   [Electron](https://www.electronjs.org/)

## Project documentation

*   [Docz and Gatsby](https://github.com/doczjs/docz/tree/master/core/gatsby-theme-docz)
*   [Sphinx](https://www.sphinx-doc.org/en/master/)

## Terminal

*   [8 Popular and Lesser Know Linux Terminal Recording Tools](https://linoxide.com/linux-how-to/linux-terminal-recording-tools/)

## Open Source Projects

*   [NumFOCUS](https://numfocus.org/)

## Recommendations of Collaborative software

- Chat: [http://gitter.im](http://gitter.im)
- Video conferences: [http://appear.in](http://appear.in), [http://hubl.in](http://hubl.in), or [https://rendez-vous.renater.fr/](https://rendez-vous.renater.fr/)
- Temporary collaborative text editing: [framapad.org](framapad.org)
- Polls: [http://framadate.org](http://framadate.org)
- Anonymous votes: [http://adoodle.org](http://adoodle.org)
- Surveys: [http://limesurvey.org](http://limesurvey.org)
- Whiteboard?

## Microlearning
* [Anki](https://apps.ankiweb.net/)
* [Computer science flash cards](https://github.com/jwasham/computer-science-flash-cards)
* [Flash cards](https://github.com/ashwanikumar04/flash-cards)
* [The Mnemosyne Project](https://mnemosyne-proj.org/)
* [Algodeck](https://github.com/teivah/algodeck)
* [SRS Toolbelt](https://github.com/balta2ar/srs-toolbelt)

## Forums

* [Discourse](https://www.discourse.org/)

## Recorded Presentations

*   [Slides Live](https://slideslive.com/)

## Text to Speech

*   [Speech Markdown](https://www.speechmarkdown.org/)
*   [Voice Bot](https://voicebot.ai/)
*   [Jovo](https://www.jovo.tech/)
*   [googleLanguageR](https://github.com/ropensci/googleLanguageR)
*   [pdf2video](https://github.com/tjunttila/pdf2video) by [Tommi Junttila](http://users.ics.aalto.fi/tjunttil/)
*   [ari](https://www.rdocumentation.org/packages/ari/)
*   [ari on GitHub](https://github.com/jhudsl/ari)
*   [ari paper](https://johnmuschelli.com/ari_paper/)
*   [ari on docker](https://github.com/seankross/ari-on-docker)
*   [ariExtra on GitHub](https://github.com/jhudsl/ariExtra)
*   [ariExtra](https://jhudatascience.org/ariExtra/)
*   [mario](https://github.com/muschellij2/mario)
*   [didactr](https://github.com/jhudsl/didactr)
*   [COVID lessons](https://github.com/jxtx/covid-lessons)
*   [Markor](https://github.com/gsantner/markor)

## Web Slides

*   [Awesome Slideshows](https://github.com/slideshow-s9/awesome-slideshows)
*   [Hypersay](https://hypersay.com/en/)
*   [MDX Deck (React)](https://github.com/jxnblk/mdx-deck)
*   [Eagle js slides (Vue)](https://github.com/zulko/eagle.js/)
*   [Vue presentation](https://github.com/RobinCK/vue-presentation)
*   [WebSlides](https://webslides.tv/)
*   [Impress js](https://github.com/impress/impress.js/)
*   [Deck js](http://imakewebthings.com/deck.js/)
*   [Slides](http://www.briancavalier.com/code/slides/#0)
*   [Slide show S9](http://slideshow-s9.github.io/)
*   [HTML5 slides](https://github.com/KatieK2/html5-slides)
*   [DZSlides](http://paulrouget.com/dzslides/)
*   [Slidy](https://www.w3.org/Talks/Tools/Slidy2/Overview.html#(1))
*   [Slideous](https://goessner.net/articles/slideous/slideous.html)
*   [Fusuma](https://hiroppy.github.io/fusuma/)

## [Reveal js](https://revealjs.com/#/)

*   [Reveal.js plugins](https://github.com/rajgoel/reveal.js-plugins)
*   [Recording and editing audio](https://silshack.github.io/inls161fall2016/present/2016/11/30/recording-and-editing-audio/)
*   [Slides](https://kripken.github.io/slides/)
*   [revealSlides](https://github.com/mbotsch/revealSlides)
*   [Reveal HTML template](https://gist.github.com/aaronwolen/5017084)
*   [Present](https://github.com/anantshri/present)

## [RISE](https://rise.readthedocs.io/en/stable/)

*   [Customizing RISE](https://github.com/damianavila/RISE/blob/master/doc/customize.md)

## Code
* [Slides Code Highlighter](https://romannurik.github.io/SlidesCodeHighlighter/)

## Teaching
* [Autolab](https://docs.autolabproject.com/)

## Code Tutorials

* [Cocalc comparison](https://cocalc.com/doc/compare.html)
* [GitHub Education Pack](https://education.github.com/pack)
* [Code Your Future](https://syllabus.codeyourfuture.io/)
* [Coding Rooms](https://www.codingrooms.com/)

### GitHub

* [Teaching Courses with GitHub and Jupyter Notebooks](https://sites.duke.edu/ilearninglab/files/2020/12/Teaching-Courses-with-GitHub-and-Jupyter-Notebooks.pdf)

### Codelab

*   [claat](https://github.com/googlecodelabs/tools)
*   [claat in Node.js](https://github.com/deepakshrma/googles-codelabs)
*   [Atom extension for claat](https://github.com/ucl-casa-ce/claat-snippets-atom)

### Katacoda

*   [Katacoda](https://katacoda.com)
*   [Katacoda: create](https://katacoda.com/create)

### DevOps

*   [KodeKloud](https://kodekloud.com/)

### Databases

*   [Introduction to databases](https://github.com/ipeirotis/introduction-to-databases/tree/739f25fd9891523bc949f5aeda2c515f5d2b6858)

## Computational Social Science

* [Teaching materials for computational social science](https://github.com/collections/teaching-computational-social-science)

## Learning podcasts
* [The Tim Ferriss Show](https://tim.blog/podcast/)
* [The Knowledge Project](https://fs.blog/knowledge-podcast/)
* [Deviate](https://rolfpotts.com/deviate/)
* [Bookworm](https://bookworm.fm/)
* [Invest like the Best](https://podcasts.apple.com/gb/podcast/invest-like-the-best-with-patrick-oshaughnessy/id1154105909)
* [The North Star Podcast](https://perell.com/podcast/)
* [The Art of Manliness](https://www.artofmanliness.com/podcast/)
* [Impact Theory](https://impacttheory.com/episodes/)
* [The School of Greatness](https://podcasts.apple.com/gb/podcast/the-school-of-greatness/id596047499)
* [The Diary of a CEO](https://podcasts.apple.com/gb/podcast/the-diary-of-a-ceo-with-steven-bartlett/id1291423644)
* [The Huberman Lab](https://hubermanlab.com/)
* [My First Million](https://www.mfmpod.com/)
* [Indie Hackers](https://www.indiehackers.com/podcasts)
* [Noah Kagan Presents](https://okdork.com/podcast/)
* [The Naval Podcast](https://nav.al/)
* [Video Creators Podcast](https://videocreators.com/podcast/)
* [The Gary Vee Audio Experience](https://www.garyvaynerchuk.com/podcast/)
* [That Creative Life](https://www.thatcreative.life/)
* [The Stalman Podcast](https://www.stalmanpodcast.com/)
* [The Secret Podcast](https://podcasts.apple.com/us/podcast/the-secret-podcast/id1319433512)
* [The Matti and Pete Show](https://www.mattiandpeteshow.com/)
* [Tuxedo Time Podcast](https://www.youtube.com/c/thetuxedotimepodcast)
* [The Property Podcast](https://propertyhub.net/podcast/)
* [Smart Passive Income](https://www.smartpassiveincome.com/listen/)

## Jupyter Notebooks
* [Awesome Jupyter](https://github.com/markusschanta/awesome-jupyter)

### Research

* [OpenDreamKit](https://opendreamkit.org/)
* [Stencila](https://stenci.la/)
* [Binder](https://mybinder.readthedocs.io/en/latest/)
* [Whole Tale](https://wholetale.org/)
* [Code Ocean](https://codeocean.com/)
* [Is mybinder 95% of the way to next-gen computational science publishing, or only 90%?](http://ivory.idyll.org/blog/2016-mybinder.html)

### Education
* [Teaching and Learning with Jupyter](https://blog.jupyter.org/teaching-and-learning-with-jupyter-c1d965f7b93a)
* [Book: Teaching and Learning with Jupyter](https://jupyter4edu.github.io/jupyter-edu-book/)
* [Data Science at UBC](https://datascience.ubc.ca/)
  * [Rudaux](https://ubc-dsci.github.io/rudaux/content/preface.html)
* [Coursekata](https://coursekata.org/)
* [Illumidesk](https://www.illumidesk.com/)

#### Books
* [Jupyter Book](https://jupyterbook.org/intro.html)
* [iPyPublish](https://ipypublish.readthedocs.io/en/latest/)
* [MkDocs](https://www.mkdocs.org/)

#### Learning Tools Interoperability
* [LTI Launch JupyterHub Authenticator](https://github.com/jupyterhub/ltiauthenticator)

### Machine Learning Hub
* [CoCalc Kubernetes](https://github.com/sagemathinc/cocalc-kubernetes)
* [Argoflow](https://github.com/argoflow)
* [PrimeHub](https://docs.primehub.io/)
* [Science Box](https://sciencebox.web.cern.ch/sciencebox/)
* [JupyterHub](https://github.com/jupyterhub/jupyterhub)
* [The littlest JuperHub](https://github.com/jupyterhub/the-littlest-jupyterhub) ([tljh](https://tljh.jupyter.org/en/latest/))
* [Plugin for The Littlest JupyterHub to build multiple user environments with repo2docker](https://github.com/plasmabio/tljh-repo2docker)
* [Zero to JupyterHub k8s](https://github.com/jupyterhub/zero-to-jupyterhub-k8s)
* [ContainDS Dashboards](https://cdsdashboards.readthedocs.io/en/stable/#)

### Running Jupyter on the cloud
* [CoCalc (previously SageMathCloud)](https://cocalc.com) 
* [Gryd](https://gryd.us)
* [HubHero](https://hubhero.net)
* [Kaggle Kernels](https://kaggle.com/kernels)
* [codio](https://codio.com/features/ide)
* [Microsoft Azure notebooks](https://notebooks.azure.com/)
* [Amazon Sagemaker](https://docs.aws.amazon.com/sagemaker/latest/dg/ex1-prepare.html)
* [Gradient by Paperspace](https://www.paperspace.com/gradient)
* [Google Colaboratory](https://colab.research.google.com/ )

### Notebook Tools
* [Pandoc Jupyter Notebooks](https://pandoc.org/MANUAL.html#jupyter-notebooks)
* [nteract](https://nteract.io/)
* [nteract on Github](https://github.com/nteract)
* [Semiotic](https://semiotic.nteract.io/)
* [Commuter](https://github.com/nteract/commuter)
* [Mybinder](https://github.com/binder-examples/)
* [Jupyter extensions](https://blog.jupyter.org/99-ways-to-extend-the-jupyter-ecosystem-11e5dab7c54)
* [Zero to Binderhub](https://binderhub.readthedocs.io/en/latest/zero-to-binderhub/index.html#zero-to-binderhub)
* [Zero to JupyterHub with Kubernetes](https://zero-to-jupyterhub.readthedocs.io/en/latest/index.html#customization-guide)
* [Jupyter Notebook Tools for Sphinx](https://nbsphinx.readthedocs.io/en/0.7.0/)
* [Myst-nb](https://myst-nb.readthedocs.io/en/latest/)
* [Executable notebooks](https://github.com/executablebooks)

### Education
* [Teaching and learning with Jupyter](https://jupyter4edu.github.io/jupyter-edu-book/)

### Textbooks
* [Numerical Linear Algebra by FastAI](https://github.com/fastai/numerical-linear-algebra)
* [Algorithms for Optimization](https://github.com/sisl/algforopt-notebooks)
* [Jupyter Notebooks for Robotics Courses](https://github.com/jotaraul/jupyter-notebooks-for-robotics-courses)
* [Jupyter notebooks for teaching Robotics and Machine Learning](https://github.com/alessandro-giusti/teaching-notebooks)

### Block-Based Programming
* [BlockPy Jupyter Notebooks](https://blog.ouseful.info/tag/blockpy/)
* [Learning Calico Jigsaw](https://www.youtube.com/playlist?list=PLo7YO_w3ktGSuVtXI6WG2JXO6yHh-xnEa)
