import * as cdk from '@aws-cdk/core';
import * as sqs from '@aws-cdk/aws-sqs';

export interface AwsCdkConstructProps {
  // Define construct properties here
}

export class AwsCdkConstruct extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, props: AwsCdkConstructProps = {}) {
    super(scope, id);

    // Define construct contents here

    // example resource
    const queue = new sqs.Queue(this, 'AwsCdkConstructQueue', {
      visibilityTimeout: cdk.Duration.seconds(300)
    });
  }
}
