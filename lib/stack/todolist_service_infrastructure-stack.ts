import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as iam from 'aws-cdk-lib/aws-iam';

interface TodolistServiceInfrastructureStackProps extends cdk.StackProps {
  readonly USER_SUFFIX: string,
};

export class TodolistServiceInfrastructureStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: TodolistServiceInfrastructureStackProps) {
    super(scope, id, props);

    const { USER_SUFFIX } = props;

    // The code that defines your stack goes here

    const userProfileTable = new dynamodb.Table(this, `UserProfileTable${USER_SUFFIX}`, {
      partitionKey: { name: 'userProfileId', type: dynamodb.AttributeType.STRING },
      tableName: `UserProfileTable${USER_SUFFIX}`,
    });

    const taskTable = new dynamodb.Table(this, `Task${USER_SUFFIX}`, {
      partitionKey: { name: 'taskId', type: dynamodb.AttributeType.STRING },
      tableName: `Task${USER_SUFFIX}`,
    });
  }
}
