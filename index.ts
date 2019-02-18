import * as pulumi from "@pulumi/pulumi";

// staticWebsite is an NPM package that contains a Pulumi component for hosting
// a static website on AWS.
// https://github.com/chrsmith/static-website-aws
// https://github.com/pulumi/examples/tree/master/aws-ts-static-website
import * as staticWebsite from "static-website-aws";

const contentArgs: staticWebsite.ContentArgs = {
    pathToContent: "./browserhack-static",
    custom404Path: "/404.html",
};

const config = new pulumi.Config();

const domainArgs: staticWebsite.DomainArgs = {
    targetDomain: config.require("targetDomain"),
    acmCertificateArn: config.require("acmCertificate"),
};

// The StaticWebsite resource will create a Route53 DNS entry for the target domain,
// copy the website's contents to an S3 bucket, and then serve it from CloudFront.
const website = new staticWebsite.StaticWebsite("browserhack", contentArgs, domainArgs);

export let targetDomain = domainArgs.targetDomain;
export let cloudfrontDomain = website.cdn.domainName;
