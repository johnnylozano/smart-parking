import { useQuery } from "react-query";
import { API } from "aws-amplify";
import { useEffect, useState } from "react";

export const useCapacity = (timerInterval = 50000) => {
  const getTotalCapacity = (jsonRes) => {
    let capacityTotal = 0;
    for (let i in jsonRes) {
      capacityTotal += parseInt(jsonRes[i].Direction);
    }
    return capacityTotal < 0 ? 0 : capacityTotal;
  };

  const fetchCapacity = async () => {
    const capacityRes = await API.get("capacityApi", "/capacity");
    console.log(capacityRes);
    return getTotalCapacity(capacityRes);
  };

  const {
    data: spotsTaken,
    isLoading,
    isError,
    error,
  } = useQuery("capacity", fetchCapacity);

  const [refreshInterval, setRefreshInterval] = useState(timerInterval);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Refetch data every refreshInterval milliseconds
      setRefreshInterval(timerInterval);
    }, refreshInterval);

    // Cleanup the interval when component unmounts
    return () => clearInterval(intervalId);
  }, [refreshInterval, timerInterval]);

  return { spotsTaken, isLoading, isError, error };
};
