var express = require('express');
var router = express.Router();
app.set('view engine' , 'ejs')
const glossary = [
  {
    Number:'1',
    term: 'Apache',
    definition: ' one of the most well-known open-source web servers is a robust cross-platform utility that allows for the easy and flexible deployment of websites and apps.',
    sources: 'Anon, (2018). DevOps glossary: 78 basic DevOps terms explained in simple words | IT Svit. [online] Available at: https://itsvit.com/blog/devops-glossary-78-basic-devops-terms-in-simple-words/ [Accessed 13 Jul. 2023].'},
    {Number:'2',
      term: 'Bucket',
    definition: 'An S3 bucket, which is similar to a virtual storage container in Amazon S3 (Simple Storage Service), is where you can keep various types of files and the information associated with them."',
    sources: 'Anon, (2018). DevOps glossary: 78 basic DevOps terms explained in simple words | IT Svit. [online] Available at: https://itsvit.com/blog/devops-glossary-78-basic-devops-terms-in-simple-words/ [Accessed 13 Jul. 2023].',
  },
  {
    Number:'3',
    term: 'Artifact',
  definition: 'In the context of a project, an artefact is any documentation or deliverable that is critical in defining the functionality, architecture, and design features of the software being developed.',
  sources: 'Plutora. (n.d.). DevOps DevOps Terminology: A Glossary. [online] Available at: https://www.plutora.com/devops-at-scale/terminology-glossary.'},
  {Number:'4',
    term: 'Capacity Test',
  definition: 'Capacity tests evaluate an applications ability to handle a given number of users or transactions, providing a system performance baseline. This type of test helps us to assess the applications limits and establish its ability to handle a large workload.',
  sources: 'Plutora. (n.d.). DevOps DevOps Terminology: A Glossary. [online] Available at: https://www.plutora.com/devops-at-scale/terminology-glossary.'},
  {Number:'5',
    term: 'Deployment',
  definition: 'There comes a point in the software delivery process when we carefully package the new code, distribute it to our valued clients, and seamlessly update the operating applications, all while assuring a smooth user experience with no interruptions.',
  sources: 'Anon, (2018). DevOps glossary: 78 basic DevOps terms explained in simple words | IT Svit. [online] Available at: https://itsvit.com/blog/devops-glossary-78-basic-devops-terms-in-simple-words/ [Accessed 13 Jul. 2023]'},
  {Number:'6',
    term: 'Continuous Deployment (CDE)',
  definition: 'Continuous deployment enables a development team to incorporate code segments into the production environment many times per day, giving a completely automated solution to continuous delivery.',
  sources: 'Plutora. (n.d.). DevOps DevOps Terminology: A Glossary. [online] Available at: https://www.plutora.com/devops-at-scale/terminology-glossary.'},
  {Number:'7',
    term: 'Exploratory Testing',
  definition: 'A conventional testing approach gives human testers the ability to explore and analyze potential problem areas that automated testing may not adequately capture, allowing them to identify flaws that would otherwise be ignored.',
  sources: 'Inc, Dz. (2017). 48 DevOps Terms You Should Know (A DevOps Glossary). [online] Medium. Available at: https://medium.com/@DZoneInc/48-devops-terms-you-should-know-a-devops-glossary-37e60fd23752 [Accessed 13 Jul. 2023].'},
  {Number:'8',
    term: 'Fail Fast',
  definition: 'In this technique, you give something a go, but if it doesnt work out, you quickly collect feedback, make improvements, and try again.',
  sources: 'Inc, Dz. (2017). 48 DevOps Terms You Should Know (A DevOps Glossary). [online] Medium. Available at: https://medium.com/@DZoneInc/48-devops-terms-you-should-know-a-devops-glossary-37e60fd23752 [Accessed 13 Jul. 2023].'},
  {Number:'9',
    term: 'Zabbix',
  definition: 'I recently discovered this fantastic open-source cloud infrastructure monitoring service. Its intended to monitor the status of various network resources and services. What I like best about it is that it includes a server as well as agents that collaborate to give smart alerting capabilities for distributed systems. Its as though you have your own attentive monitoring system watching over everything!',
  sources: 'Anon, (2018). DevOps glossary: 78 basic DevOps terms explained in simple words | IT Svit. [online] Available at: https://itsvit.com/blog/devops-glossary-78-basic-devops-terms-in-simple-words/ [Accessed 13 Jul. 2023]'},
  {Number:'10',
    term: 'Microservices',
  definition: 'The microservices architecture is a remarkable software development method that ideally combines with the service-oriented architecture (SOA). It beautifully organises an application into a magnificent collection of marvellously separate services. The fact that these services are extraordinarily fine-grained makes them even more nimble and versatile for designing new apps.',
  sources: 'www.globalknowledge.com. (n.d.). DevOps Glossary of Terms. [online] Available at: https://www.globalknowledge.com/ca-en/topics/devops/glossary-of-terms/ [Accessed 13 Jul. 2023].'},
  // Add more glossary terms here
];
app.set('view engine' , 'ejs')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { glossary: glossary });
});

module.exports = router;
