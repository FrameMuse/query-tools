import Mapping from "./Mapping"

describe("QueryPayload", () => {
  describe("TransformOptions()", () => {
    test("CamelCase", () => {
      const valueTest = {
        "notification-type": 1,
        "reciept_my": {
          "latest__info": [
            {
              "a-a": 1,
              "reciept_my": { "latest__info": [{ "a-a": 1 }, "b", true, "d"] }
            },
            "b",
            true,
            "d"
          ]
        }
      }
      const valueExpected = {
        notificationType: 1,
        recieptMy: {
          latestInfo: [
            {
              aA: 1,
              recieptMy: { latestInfo: [{ aA: 1 }, "b", true, "d"] }
            },
            "b",
            true,
            "d"
          ]
        }
      }

      expect(Mapping.Options({ casing: "camel" })(valueTest)).toEqual(valueExpected)
    })

    test("SnakeCase", () => {
      const valueTest = {
        "notification-type": 1,
        "reciept_my": {
          "latest__info": [
            {
              "a-a": 1,
              "reciept_my": { "latest__info": [{ "a-a": 1 }, "b", true, "d"] }
            },
            "b",
            true,
            "d"
          ]
        }
      }
      const valueExpected = {
        notification_type: 1,
        reciept_my: {
          latest_info: [
            {
              a_a: 1,
              reciept_my: { latest_info: [{ a_a: 1 }, "b", true, "d"] }
            },
            "b",
            true,
            "d"
          ]
        }
      }

      expect(Mapping.Options({ casing: "snake" })(valueTest)).toEqual(valueExpected)
    })

    test("KebabCase", () => {
      const valueTest = {
        "notification-type": 1,
        "reciept_my": {
          "latest__info": [
            {
              "a-a": 1,
              "reciept_my": { "latest__info": [{ "a-a": 1 }, "b", true, "d"] }
            },
            "b",
            true,
            "d"
          ]
        }
      }
      const valueExpected = {
        "notification-type": 1,
        "reciept-my": {
          "latest-info": [
            {
              "a-a": 1,
              "reciept-my": { "latest-info": [{ "a-a": 1 }, "b", true, "d"] }
            },
            "b",
            true,
            "d"
          ]
        }
      }

      expect(Mapping.Options({ casing: "kebab" })(valueTest)).toEqual(valueExpected)
    })
  })
})
