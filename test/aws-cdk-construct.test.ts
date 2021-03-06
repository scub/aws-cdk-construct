import { Template } from '@aws-cdk/assertions';
import * as cdk from '@aws-cdk/core';
import * as AwsCdkConstruct from '../lib/index';

// example test. To run these tests, uncomment this file along with the
// example resource in lib/index.ts
test('SQS Queue Created', () => {
   const app = new cdk.App();
   const stack = new cdk.Stack(app, 'TestStack');
   new AwsCdkConstruct.AwsCdkConstruct(stack, 'MyTestConstruct');
   const template = Template.fromStack(stack);

   template.hasResourceProperties('AWS::SQS::Queue', {
     VisibilityTimeout: 300
   });
});
