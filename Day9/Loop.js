
for (let i = 0; i <= 10; i++) {
    const element = i;
    // console.log(element);
}

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        // console.log(`${i} * ${j} = ${i * j}`)

    }
    // console.log("")
}

// break continue

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        // console.log("5 is detected")
        break
    }
    // console.log(i)
}

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log("5 is detected")
        continue
    }
    console.log(i)
}