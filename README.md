# 🌐 Convert time from one Timezone to Another based on User's Location.

Convert Time from one Timezone to Another based on User's Location using DENO.
Useful when a particular time is to be shown for a user from Different Country.

[![Test CI](https://github.com/denorg/get-ip/workflows/Deno%20CI/badge.svg)](https://github.com/guptamohit004/convert_time/actions)

## ⭐ Getting started

Import the `convertTime` function and use it:

```ts
import { convertTime } from "https://deno.land/x/convertTime/mod.ts";

const convertedtime = async () => {
    var convertedTime=await convertTime();
    // Mon Jun 01 2020 22:09:24 GMT+0530 (India Standard Time)
    console.log("Time accoding to server  is :");
    console.log(convertedTime.defaultDate)
    // Tue Jun 02 2020 02:31:42 (UTC+10:00) Hobart
    console.log("Time accoding to User's location is :");
    console.log(convertedTime.newDate)
}

convertedtime();
```

### CLI

Alternatively, you can use it directly from the CLI by using `deno run --allow-net cli.ts`:

```bash
deno run --allow-net https://deno.land/x/convertTime/cli.ts
```

You can also install it globally using the following:

```bash
deno install --allow-net -n convertTime https://deno.land/x/convertTime/cli.ts
```

Then, the package is available to run:

```bash
convertTime 
```

### Configuration

Required permissions:

1. `--allow-net`

### Response
  * Success

          * Default Date / Time : Returns the Default time e.g Time according to Server.
          * New Date / Time : Returns the New/Updated time e.g Time according to user Location/IP.
          * TimeZone of the user

  * Fail

          * Invalid Query, Try again !!.


## 👩‍💻 Development

Run tests:

```bash
deno test --allow-net
```

## 📄 License

MIT © Mohit Gupta

