# react-sai
`Swagger` API Integration for `React`.

## Presentation

I know that this could be long, but, please, be patient to read all the thing through, so you know what is presented.

## What is API Intergation

I use this term to describe any API request creating and response handling.

It involves:
- Creating `Request` - gathering URL, method, body, headers.
- Handling `Response` - making things such as `response => response.json()`.
- Handling `Error` - can be a status error, `Response` error, server error or client error. They might be treated (notice a user) differently.
- Providing client side cache. 
- Providing mocks for developing and debuging. 

You also need to deal with `React` to create fetch requests as intended:
- Hooks - `useState`, `useEffect`, `useContext`.
- Contexts (`createContext`) - e.g. for making global cache.
- Components - e.g. for providers and consumers.

### There are some practices to build API intergation

> Making requests straight via `fetch` from `useEffect` for every component or hook.
> Handling response with boilerplate code such as `response => response.json()`.
> Hanlding errors in place like `response.json().catch(error)`.

This approach is nothing bad, but it's going to be a problem since it's creating so much boilerplate code, that will be extremely difficult to maitain as a code base and API grows.

> Creating your own hooks and functions to

> Using `react-query`.

### So what `react-sai` does?

A standardized way of making requests. You only care about updating "Swagger Docs" from time to time and that's it for API's.

It's more like with

<!-- This is why this library is so popular, it gets rid of a lot of boilerplate code -->

## Motivation

Making requests requires data serialization for sending and deserialization for receiving.

Inspired by [`NextJs`]().



/**
  * Only declared schemas can be mapped, which are placed in `["components"]["schemas"]`.
  * 
  * All `$ref`'s will be mapped too if there are corresponding schema mappings.
  */
