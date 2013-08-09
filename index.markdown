---
layout: default
title: My Résumé, and a few others
---

{% capture jumbo %}
Surprisingly, résumés can be beautiful. I've kept a few around to try and imitate. If beauty isn't what you're after...
{% endcapture %}

{% capture alert %}
If you see any other good examples, let me know: <bodey.baker@gmail.com>
{% endcapture %}

{% capture email %}
<bodey.baker@gmail.com>
{% endcapture %}

{% capture mine %}
My first decent résumé was written for a university assignment. We had to use Latex for all the other assignments, so that's what I used for this too. It was a pain getting it to look nice and that's my main reason for bothering with this site. That and I wanted some notes for next time I get around to making a resume. At some point I'm planning on moving it to HTML/CSS.

 - [PDF][]
 - [Source Code][]
 - [English Teacher Version][]

[PDF]:  {{site.baseurl}}/latex/bodey-cv.pdf
[Source Code]:  {{site.baseurl}}/latex/bodey-cv.latex
[English Teacher Version]:  {{site.baseurl}}/latex/bodey-cv-elt.pdf
{% endcapture %}

{% capture examples %}
Here are some nice résumés I've seen around:
* [Kevin Fox's résumé][] ([cached][cached-fox]) is beautiful in it's simplicity. If only I had the experience.
* [Abie Rose][] ([cached][cached-abie])has a nice one for a creative job.
* [Alyson Shontell's cover letter][] (cached: [pg1][], [pg2][]) for applying at Google.
* [Katie Newell's résumés][] ([cached][cached-katie]) isn't too much for a technical role, but still nicely designed.
* I obviously read [James Paden's guide][] while collecting these
* [Hugo Giraudel has a nice HTML resume][]
* Bret Vicor has [an awesome website with a cv on it][Bret Vicor] ([cached][Bret Vicor Cached]).

[Kevin Fox's résumé]:  http://fury.com/resume/kevin_fox_resume.pdf
[cached-fox]:  {{site.baseurl}}/examples/kevin_fox.pdf
[Abie Rose]:  http://abierose.com/resume.pdf
[cached-abie]:  {{site.baseurl}}/examples/abierose.pdf
[Alyson Shontell's cover letter]:  http://www.businessinsider.com/this-is-the-application-and-cover-letter-that-got-me-an-interview-with-google-2011-2)
[pg1]:  {{site.baseurl}}/examples/alson-shontel1.jpg
[pg2]:  {{site.baseurl}}/examples/alson-shontel1.jpg
[Katie Newell's résumés]:  http://www.katienewell.com
[cached-katie]:  {{site.baseurl}}/examples/katienewell.pdf
[James Paden's guide]:  http://www.xemion.com/website-design-learning-center/5-steps-to-the-perfect-web-designer-resume/
[Hugo Giraudel has a nice HTML resume]:  http://hugogiraudel.com/resume/
[Bret Vicor]:  http://worrydream.com/#!/cv/bret_victor_resume.pdf
[Bret Vicor Cached]:  {{site.baseurl}}/examples/bret_victor_resume.pdf
{% endcapture %}

{% include home-page.html %}

