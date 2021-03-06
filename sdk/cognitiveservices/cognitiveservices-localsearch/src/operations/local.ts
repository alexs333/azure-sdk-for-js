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
import * as Mappers from "../models/localMappers";
import * as Parameters from "../models/parameters";
import { LocalSearchClientContext } from "../localSearchClientContext";

/** Class representing a Local. */
export class Local {
  private readonly client: LocalSearchClientContext;

  /**
   * Create a Local.
   * @param {LocalSearchClientContext} client Reference to the service client.
   */
  constructor(client: LocalSearchClientContext) {
    this.client = client;
  }

  /**
   * @summary The Local Search API lets you send a search query to Bing and get back search results
   * that include local businesses such as restaurants, hotels, retail stores, or other local
   * businesses. The query can specify the name of the local business or it can ask for a list (for
   * example, restaurants near me).
   * @param query The user's search term.
   * @param [options] The optional parameters
   * @returns Promise<Models.LocalSearchResponse>
   */
  search(query: string, options?: Models.LocalSearchOptionalParams): Promise<Models.LocalSearchResponse>;
  /**
   * @param query The user's search term.
   * @param callback The callback
   */
  search(query: string, callback: msRest.ServiceCallback<Models.SearchResponse>): void;
  /**
   * @param query The user's search term.
   * @param options The optional parameters
   * @param callback The callback
   */
  search(query: string, options: Models.LocalSearchOptionalParams, callback: msRest.ServiceCallback<Models.SearchResponse>): void;
  search(query: string, options?: Models.LocalSearchOptionalParams | msRest.ServiceCallback<Models.SearchResponse>, callback?: msRest.ServiceCallback<Models.SearchResponse>): Promise<Models.LocalSearchResponse> {
    return this.client.sendOperationRequest(
      {
        query,
        options
      },
      searchOperationSpec,
      callback) as Promise<Models.LocalSearchResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const searchOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "localbusinesses/v7.0/search/localbusinesses/v7.0/search",
  queryParameters: [
    Parameters.countryCode,
    Parameters.market,
    Parameters.query,
    Parameters.localCategories,
    Parameters.localCircularView,
    Parameters.localMapView,
    Parameters.count,
    Parameters.first,
    Parameters.responseFormat,
    Parameters.safeSearch,
    Parameters.setLang
  ],
  headerParameters: [
    Parameters.xBingApisSDK,
    Parameters.acceptLanguage,
    Parameters.pragma,
    Parameters.userAgent,
    Parameters.clientId,
    Parameters.clientIp,
    Parameters.location
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SearchResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
