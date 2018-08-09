import * as pulumi from "@pulumi/pulumi";
import * as staticWebsite from "static-website-aws";

const contentArgs: staticWebsite.ContentArgs = {
    pathToContent: "./browserhack-static",
    custom404Path: "/404.html",
};

const domainArgs: staticWebsite.DomainArgs = {
    targetDomain: "browserhack.lawn-gnomes.net",
    acmCertificateArn: "arn:aws:acm:us-east-1:153052954103:certificate/8d62a568-cc86-4e26-8f6e-08981e1bb7ca",
};

const website = new staticWebsite.StaticWebsite("browserhack", contentArgs, domainArgs);

export let targetDomain = domainArgs.targetDomain;
export let cloudfrontDomain = website.cdn.domainName;
