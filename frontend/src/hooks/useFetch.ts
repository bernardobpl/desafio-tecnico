import { AxiosRequestConfig, AxiosResponse } from "axios";
import { useCallback, useEffect, useState } from "react";
import { api } from "../api";

const useFetch = <T>(endpoint:string, options?: AxiosRequestConfig<any>, immediate: boolean = true) => {
  const [response, setResponse] = useState<AxiosResponse<T> | null>(null);
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const execute = useCallback(async ()=>{
    setIsLoading(true);
    setData(null);

    try {
      const response = await api.get<T>(endpoint, options);
      setIsLoading(false);
      setData(response.data);
      setResponse(response);
    }
    catch (error: unknown) {
      setIsLoading(false);
      setError(error)
    }
  },[endpoint, options])

  useEffect(()=>{
    if(immediate) execute()
  },[execute, immediate]);

  return { response, data, isLoading, error, execute }
}

export { useFetch };