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

{% capture mine %}
My first decent résumé was written for a university assignment. We had to use Latex for all the other assignments, so I used it for my résumé too. It was a pain getting it to look nice so I figured I may as well share it. That also gave me somewhere to put the other résumés I've collected. At some point I'm planning on converting it to a HTML/CSS document.

 - [PDF][]
 - [Source Code][]
 - [English Teacher Version][]

[PDF]:  {{site.baseurl}}/latex/bodey-cv.pdf
[Source Code]:  {{site.baseurl}}/latex/bodey-cv.tex
[English Teacher Version]:  {{site.baseurl}}/latex/bodey-cv-elt.pdf

<!--
[forcing A4 size onto websites]:  http://stackoverflow.com/questions/3341485/how-to-make-a-html-page-in-a4-paper-size-pages
[print media css]: http://stackoverflow.com/questions/9718435/format-a-html-document-into-multiple-a4-size-sections
[WeasyPring for prining html]:  http://weasyprint.org/
-->
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

{% capture footer %}
Free to use in any way.
{% endcapture %}

{% include home-page.html %}

