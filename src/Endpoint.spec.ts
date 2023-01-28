import Endpoint, { NormalizeEndpoint } from "./Endpoint"

describe("Query endpoint", () => {
  test("Normalization", () => {
    const endpoint = "  // ///../ad/asd///g.php"
    const endpointExpected: NormalizeEndpoint<typeof endpoint> = "////../ad/asd///g.php"
    const endpointNormalized: typeof endpointExpected = Endpoint.normalize(endpoint)

    expect(endpointNormalized).toBe(endpointExpected)
  })
})
