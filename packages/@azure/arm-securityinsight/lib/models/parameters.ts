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

export const acceptLanguage: msRest.OperationParameter = {
  parameterPath: "acceptLanguage",
  mapper: {
    serializedName: "accept-language",
    defaultValue: 'en-US',
    type: {
      name: "String"
    }
  }
};
export const actionId: msRest.OperationURLParameter = {
  parameterPath: "actionId",
  mapper: {
    required: true,
    serializedName: "actionId",
    type: {
      name: "String"
    }
  }
};
export const aggregationsName: msRest.OperationURLParameter = {
  parameterPath: "aggregationsName",
  mapper: {
    required: true,
    serializedName: "aggregationsName",
    type: {
      name: "String"
    }
  }
};
export const apiVersion: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "api-version",
    defaultValue: '2019-01-01-preview',
    type: {
      name: "String"
    }
  }
};
export const bookmarkId: msRest.OperationURLParameter = {
  parameterPath: "bookmarkId",
  mapper: {
    required: true,
    serializedName: "bookmarkId",
    type: {
      name: "String"
    }
  }
};
export const caseId: msRest.OperationURLParameter = {
  parameterPath: "caseId",
  mapper: {
    required: true,
    serializedName: "caseId",
    type: {
      name: "String"
    }
  }
};
export const consentId: msRest.OperationURLParameter = {
  parameterPath: "consentId",
  mapper: {
    required: true,
    serializedName: "consentId",
    type: {
      name: "String"
    }
  }
};
export const dataConnectorId: msRest.OperationURLParameter = {
  parameterPath: "dataConnectorId",
  mapper: {
    required: true,
    serializedName: "dataConnectorId",
    type: {
      name: "String"
    }
  }
};
export const entityId: msRest.OperationURLParameter = {
  parameterPath: "entityId",
  mapper: {
    required: true,
    serializedName: "entityId",
    type: {
      name: "String"
    }
  }
};
export const nextPageLink: msRest.OperationURLParameter = {
  parameterPath: "nextPageLink",
  mapper: {
    required: true,
    serializedName: "nextLink",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const operationalInsightsResourceProvider: msRest.OperationURLParameter = {
  parameterPath: "operationalInsightsResourceProvider",
  mapper: {
    required: true,
    serializedName: "operationalInsightsResourceProvider",
    type: {
      name: "String"
    }
  }
};
export const resourceGroupName: msRest.OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    required: true,
    serializedName: "resourceGroupName",
    constraints: {
      MaxLength: 90,
      MinLength: 1,
      Pattern: /^[-\w\._\(\)]+$/
    },
    type: {
      name: "String"
    }
  }
};
export const ruleId: msRest.OperationURLParameter = {
  parameterPath: "ruleId",
  mapper: {
    required: true,
    serializedName: "ruleId",
    type: {
      name: "String"
    }
  }
};
export const settingsName: msRest.OperationURLParameter = {
  parameterPath: "settingsName",
  mapper: {
    required: true,
    serializedName: "settingsName",
    type: {
      name: "String"
    }
  }
};
export const subscriptionId: msRest.OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    required: true,
    serializedName: "subscriptionId",
    constraints: {
      Pattern: /^[0-9A-Fa-f]{8}-([0-9A-Fa-f]{4}-){3}[0-9A-Fa-f]{12}$/
    },
    type: {
      name: "String"
    }
  }
};
export const workspaceName: msRest.OperationURLParameter = {
  parameterPath: "workspaceName",
  mapper: {
    required: true,
    serializedName: "workspaceName",
    constraints: {
      MaxLength: 90,
      MinLength: 1
    },
    type: {
      name: "String"
    }
  }
};