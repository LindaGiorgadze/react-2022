import { useEffect, useState } from "react";

export default function UseResolution() {
    const [resolution, setResolution] = useState();
    useEffect(() => {
      window.addEventListener('resize', (e) => {
        setResolution(e.target.innerWidth);
      });
    }, []);
    return resolution;
}