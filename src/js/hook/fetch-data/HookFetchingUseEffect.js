import React, { useEffect, useState } from "react";
import axios from "axios";

function HookFetchingUseEffect(props) {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        setLoading(false);
        setPost(response.data);
        setError("");
      })
      .catch((error) => {
        setLoading(false);
        setPost("");
        setError("Download failed");
      });
  }, []);

  return (
    <div>
      {loading ? "loading" : post.title}
      {error ? error : null}
    </div>
  );
}

export default HookFetchingUseEffect;
