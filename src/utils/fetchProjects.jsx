import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: "ty6v85dqhyv5",
  environment: "master",
  accessToken: "hCzQeZhzB2usfuMwbr4KVismWDbt6-aPRaoeorEcnx0",
});

export const useFetchProjects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "portfolioProjects",
      });
      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields;
        const id = item.sys.id;
        return { id, title, image,url };
      });
      setProjects(projects);
      setIsLoading(false);
    } catch (error) {
        setIsLoading(false)
        return error;
    }
    };
    useEffect(() => {
        getData()
    }, [1])
    
    return {isLoading,projects}
};
