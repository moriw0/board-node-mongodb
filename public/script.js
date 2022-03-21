const getAllThreads = async () => {
  try {
    let allThreads = await axios.get("/api/v1/threads");
    console.log(allThreads);
  } catch (err) {
    console.log(err);
  }
};

getAllThreads();
