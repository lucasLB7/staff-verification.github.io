# staff-verification
SPA for QR verification of employee status

## Adding new persons

Edit [data.js][./data.js], append a new object to the data list.

In the form, ID must be unique

```js
    {
        "id":2,
        "name":"John Doe",
        "position":"Marketing",
        "status":"Inactive",
        "image":"https://gravatar.com/avatar/eaae69cef207ffc82b55a64de0718e23?s=400&d=robohash&r=x"
    }
```

You can also change existing attributes like setting status to `Inactive`

### generate profile URL

A profile url is in the form `https://<username>.github.io/<reponame>?id=<profile_id>` where `<profile_id>` is the person's id. 

For example [https://jakhax.github.io/staff-verification.github.io/?id=1](https://jakhax.github.io/staff-verification.github.io/?id=1) for person with ID 1

You can use online services like [https://www.qr-code-generator.com/](https://www.qr-code-generator.com/) to generate the QR.



