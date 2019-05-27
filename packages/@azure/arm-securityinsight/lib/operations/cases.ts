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
import * as Models from "../models";
import * as Mappers from "../models/casesMappers";
import * as Parameters from "../models/parameters";
import { SecurityInsightsContext } from "../securityInsightsContext";

/** Class representing a Cases. */
export class Cases {
  private readonly client: SecurityInsightsContext;

  /**
   * Create a Cases.
   * @param {SecurityInsightsContext} client Reference to the service client.
   */
  constructor(client: SecurityInsightsContext) {
    this.client = client;
  }

  /**
   * Gets all cases.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param operationalInsightsResourceProvider The namespace of workspaces resource provider-
   * Microsoft.OperationalInsights.
   * @param workspaceName The name of the workspace.
   * @param [options] The optional parameters
   * @returns Promise<Models.CasesListResponse>
   */
  list(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, options?: msRest.RequestOptionsBase): Promise<Models.CasesListResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param operationalInsightsResourceProvider The namespace of workspaces resource provider-
   * Microsoft.OperationalInsights.
   * @param workspaceName The name of the workspace.
   * @param callback The callback
   */
  list(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, callback: msRest.ServiceCallback<Models.CaseList>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param operationalInsightsResourceProvider The namespace of workspaces resource provider-
   * Microsoft.OperationalInsights.
   * @param workspaceName The name of the workspace.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CaseList>): void;
  list(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CaseList>, callback?: msRest.ServiceCallback<Models.CaseList>): Promise<Models.CasesListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        operationalInsightsResourceProvider,
        workspaceName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.CasesListResponse>;
  }

  /**
   * Gets a case.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param operationalInsightsResourceProvider The namespace of workspaces resource provider-
   * Microsoft.OperationalInsights.
   * @param workspaceName The name of the workspace.
   * @param caseId Case ID
   * @param [options] The optional parameters
   * @returns Promise<Models.CasesGetResponse>
   */
  get(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, caseId: string, options?: msRest.RequestOptionsBase): Promise<Models.CasesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param operationalInsightsResourceProvider The namespace of workspaces resource provider-
   * Microsoft.OperationalInsights.
   * @param workspaceName The name of the workspace.
   * @param caseId Case ID
   * @param callback The callback
   */
  get(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, caseId: string, callback: msRest.ServiceCallback<Models.CaseModel>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param operationalInsightsResourceProvider The namespace of workspaces resource provider-
   * Microsoft.OperationalInsights.
   * @param workspaceName The name of the workspace.
   * @param caseId Case ID
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, caseId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CaseModel>): void;
  get(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, caseId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CaseModel>, callback?: msRest.ServiceCallback<Models.CaseModel>): Promise<Models.CasesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        operationalInsightsResourceProvider,
        workspaceName,
        caseId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.CasesGetResponse>;
  }

  /**
   * Creates or updates the case.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param operationalInsightsResourceProvider The namespace of workspaces resource provider-
   * Microsoft.OperationalInsights.
   * @param workspaceName The name of the workspace.
   * @param caseId Case ID
   * @param caseParameter The case
   * @param [options] The optional parameters
   * @returns Promise<Models.CasesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, caseId: string, caseParameter: Models.CaseModel, options?: msRest.RequestOptionsBase): Promise<Models.CasesCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param operationalInsightsResourceProvider The namespace of workspaces resource provider-
   * Microsoft.OperationalInsights.
   * @param workspaceName The name of the workspace.
   * @param caseId Case ID
   * @param caseParameter The case
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, caseId: string, caseParameter: Models.CaseModel, callback: msRest.ServiceCallback<Models.CaseModel>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param operationalInsightsResourceProvider The namespace of workspaces resource provider-
   * Microsoft.OperationalInsights.
   * @param workspaceName The name of the workspace.
   * @param caseId Case ID
   * @param caseParameter The case
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, caseId: string, caseParameter: Models.CaseModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CaseModel>): void;
  createOrUpdate(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, caseId: string, caseParameter: Models.CaseModel, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CaseModel>, callback?: msRest.ServiceCallback<Models.CaseModel>): Promise<Models.CasesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        operationalInsightsResourceProvider,
        workspaceName,
        caseId,
        caseParameter,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.CasesCreateOrUpdateResponse>;
  }

  /**
   * Delete the case.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param operationalInsightsResourceProvider The namespace of workspaces resource provider-
   * Microsoft.OperationalInsights.
   * @param workspaceName The name of the workspace.
   * @param caseId Case ID
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, caseId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param operationalInsightsResourceProvider The namespace of workspaces resource provider-
   * Microsoft.OperationalInsights.
   * @param workspaceName The name of the workspace.
   * @param caseId Case ID
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, caseId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param operationalInsightsResourceProvider The namespace of workspaces resource provider-
   * Microsoft.OperationalInsights.
   * @param workspaceName The name of the workspace.
   * @param caseId Case ID
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, caseId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, caseId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        operationalInsightsResourceProvider,
        workspaceName,
        caseId,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Gets all cases.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.CasesListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.CasesListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.CaseList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CaseList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CaseList>, callback?: msRest.ServiceCallback<Models.CaseList>): Promise<Models.CasesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.CasesListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{operationalInsightsResourceProvider}/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/cases",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.operationalInsightsResourceProvider,
    Parameters.workspaceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CaseList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{operationalInsightsResourceProvider}/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/cases/{caseId}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.operationalInsightsResourceProvider,
    Parameters.workspaceName,
    Parameters.caseId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CaseModel
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{operationalInsightsResourceProvider}/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/cases/{caseId}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.operationalInsightsResourceProvider,
    Parameters.workspaceName,
    Parameters.caseId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "caseParameter",
    mapper: {
      ...Mappers.CaseModel,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.CaseModel
    },
    201: {
      bodyMapper: Mappers.CaseModel
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{operationalInsightsResourceProvider}/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/cases/{caseId}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.operationalInsightsResourceProvider,
    Parameters.workspaceName,
    Parameters.caseId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CaseList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};