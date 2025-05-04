{
  // promises
  const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "something";
      if (data) {
        resolve(data);
      } else {
        reject("error");
      }
    });
  };

  // calling the promise;

  const showData = async () => {
    const data: string = await createPromise();
    console.log(data);
  };

  showData();
}
