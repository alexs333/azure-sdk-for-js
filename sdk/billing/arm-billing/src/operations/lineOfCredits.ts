/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/lineOfCreditsMappers";
import * as Parameters from "../models/parameters";
import { BillingManagementClientContext } from "../billingManagementClientContext";

/** Class representing a LineOfCredits. */
export class LineOfCredits {
  private readonly client: BillingManagementClientContext;

  /**
   * Create a LineOfCredits.
   * @param {BillingManagementClientContext} client Reference to the service client.
   */
  constructor(client: BillingManagementClientContext) {
    this.client = client;
  }

  /**
   * Get the current line of credit.
   * @param [options] The optional parameters
   * @returns Promise<Models.LineOfCreditsGetResponse>
   */
  get(options?: msRest.RequestOptionsBase): Promise<Models.LineOfCreditsGetResponse>;
  /**
   * @param callback The callback
   */
  get(callback: msRest.ServiceCallback<Models.LineOfCredit>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  get(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LineOfCredit>): void;
  get(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.LineOfCredit>, callback?: msRest.ServiceCallback<Models.LineOfCredit>): Promise<Models.LineOfCreditsGetResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getOperationSpec,
      callback) as Promise<Models.LineOfCreditsGetResponse>;
  }

  /**
   * Increase the current line of credit.
   * @param [options] The optional parameters
   * @returns Promise<Models.LineOfCreditsIncreaseResponse>
   */
  increase(options?: Models.LineOfCreditsIncreaseOptionalParams): Promise<Models.LineOfCreditsIncreaseResponse> {
    return this.beginIncrease(options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.LineOfCreditsIncreaseResponse>;
  }

  /**
   * Increase the current line of credit.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginIncrease(options?: Models.LineOfCreditsBeginIncreaseOptionalParams): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        options
      },
      beginIncreaseOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Billing/billingAccounts/default/lineOfCredit/default",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.LineOfCredit
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginIncreaseOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Billing/billingAccounts/default/lineOfCredit/default/increase",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      desiredCreditLimit: [
        "options",
        "desiredCreditLimit"
      ]
    },
    mapper: {
      ...Mappers.IncreaseLineOfCreditRequestProperties,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.LineOfCredit,
      headersMapper: Mappers.LineOfCreditsIncreaseHeaders
    },
    202: {
      headersMapper: Mappers.LineOfCreditsIncreaseHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
