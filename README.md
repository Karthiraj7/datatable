# mui

## Summary

Requirements:
Controlling Icons: You want to control icons based on data from a SharePoint list, presumably displaying different icons based on list item properties.

Adding and Removing Items: Ability to add and remove items from a SharePoint list using your SPFx web part.

Arranging Order Using Drag-and-Drop: Implement drag-and-drop functionality to allow users to reorder items in a list visually.

Manipulating List Data: Perform CRUD (Create, Read, Update, Delete) operations on SharePoint list items from your SPFx web part.

Summary View: Display a summary or aggregated view of list data, possibly in a custom format or using calculated values.

Approach:
1. Controlling Icons:
Data Fetching: Use SharePoint Framework's spHttpClient or PnPjs library to fetch data from your SharePoint list.
Rendering: Based on the fetched data, conditionally render icons in your web part UI.
2. Adding and Removing Items:
Forms: Use React or other frameworks supported by SPFx to create forms for adding and editing list items.
HTTP Requests: Implement POST and DELETE requests to SharePoint REST API (/_api/web/lists/getbytitle('ListName')/items) to add and delete items.
3. Arranging Order Using Drag-and-Drop:
Library: Use libraries like react-beautiful-dnd or spfx-drag-drop for drag-and-drop functionality within your SPFx web part.
Update Order: Upon drop events, update the order index of items in your SharePoint list using PATCH requests to update item properties.
4. Manipulating List Data:
CRUD Operations: Implement functions or methods for CRUD operations using SharePoint REST API or PnPjs.
Error Handling: Ensure robust error handling for network failures or validation errors during CRUD operations.
5. Summary View:
Aggregation: Use SharePoint REST API or client-side aggregation (e.g., JavaScript Array methods) to calculate and display summaries based on list data.
Custom UI: Design a UI component within your SPFx web part to display the summary data in a user-friendly format.
Implementation Steps:
Set Up Your SPFx Project: Create a new SPFx web part project using Yeoman generator (yo @microsoft/sharepoint).
Component Development: Develop React components for displaying list data, forms for adding/editing items, and drag-and-drop functionality.
Integration with SharePoint API: Utilize SharePoint Framework's built-in support for SharePoint REST API or use PnPjs for data operations.
Testing and Debugging: Test your web part thoroughly, including CRUD operations, drag-and-drop functionality, and UI responsiveness.
Deployment: Package your SPFx solution (gulp bundle --ship, gulp package-solution --ship) and deploy it to your SharePoint environment.
Considerations:
Permissions: Ensure the user has appropriate permissions (edit, contribute) to perform CRUD operations on the SharePoint list.
Performance: Optimize data fetching and rendering to ensure a smooth user experience, especially with large datasets.
User Interface: Design an intuitive user interface with clear feedback for actions like adding, deleting, and rearranging items.


## Used SharePoint Framework Version

![version](https://img.shields.io/badge/version-1.18.2-green.svg)

## Applies to

- [SharePoint Framework](https://aka.ms/spfx)
- [Microsoft 365 tenant](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)

> Get your own free development tenant by subscribing to [Microsoft 365 developer program](http://aka.ms/o365devprogram)

## Prerequisites

> Any special pre-requisites?

## Solution

| Solution    | Author(s)                                               |
| ----------- | ------------------------------------------------------- |
| folder name | Author details (name, company, twitter alias with link) |

## Version history

| Version | Date             | Comments        |
| ------- | ---------------- | --------------- |
| 1.1     | March 10, 2021   | Update comment  |
| 1.0     | January 29, 2021 | Initial release |

## Disclaimer

**THIS CODE IS PROVIDED _AS IS_ WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

---

## Minimal Path to Awesome

- Clone this repository
- Ensure that you are at the solution folder
- in the command-line run:
  - **npm install**
  - **gulp serve**

> Include any additional steps as needed.

## Features

Description of the extension that expands upon high-level summary above.

This extension illustrates the following concepts:

- topic 1
- topic 2
- topic 3

> Notice that better pictures and documentation will increase the sample usage and the value you are providing for others. Thanks for your submissions advance.

> Share your web part with others through Microsoft 365 Patterns and Practices program to get visibility and exposure. More details on the community, open-source projects and other activities from http://aka.ms/m365pnp.

## References

- [Getting started with SharePoint Framework](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)
- [Building for Microsoft teams](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/build-for-teams-overview)
- [Use Microsoft Graph in your solution](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/get-started/using-microsoft-graph-apis)
- [Publish SharePoint Framework applications to the Marketplace](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/publish-to-marketplace-overview)
- [Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp) - Guidance, tooling, samples and open-source controls for your Microsoft 365 development
