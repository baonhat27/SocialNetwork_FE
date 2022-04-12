const getStream = async (constraints) => {
    let stream = null;
    try {
        stream = await navigator.mediaDevices.getUserMedia(constraints);
    } catch(err) {
        alert('loi khi get media, doc log!')
        console.log(err)
    }

    return stream
}

export { getStream }