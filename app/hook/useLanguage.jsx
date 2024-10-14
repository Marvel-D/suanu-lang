// this current langugae will have a get and update functionality.

"use client";
import { useToast } from "@chakra-ui/react";
import { useRouter, redirect } from "next/navigation";
import { use, useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db, updateCurrentLanguage } from "../services/data";

export function useLanguage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [languages, setLanguages] = useState([]);
  const [courses, setCourses] = useState([]);
  const [currentLanguage, setCurrentLanguage] = useState({});

  const languageRef = collection(db, "languages");
  const courseRef = collection(db, "courses");
  const currentLanguageRef = collection(db, "current_language");

  const router = useRouter();

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        setIsLoading(true);
        const q = query(languageRef);

        const unsub = onSnapshot(q, (querySnapshot) => {
          const items = [];
          querySnapshot.forEach((doc) => {
            items.push(doc.data());
          });
          setLanguages(items);
          setIsLoading(false);
        });
        return unsub;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchCourses = async () => {
      try {
        setIsLoading(true);
        const q = query(courseRef);

        const unsub = onSnapshot(q, (querySnapshot) => {
          const items = [];
          querySnapshot.forEach((doc) => {
            items.push(doc.data());
          });
          setCourses(items);
          setIsLoading(false);
        });
        return unsub;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchLanguages();
    fetchCourses();

    return () => {};
  }, []);

  const fetchCurrentLanguage = async () => {
    try {
      setIsLoading(true);
      const q = query(currentLanguageRef);

      const unsub = onSnapshot(q, (querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });
        setCurrentLanguage(items[0]);
        setIsLoading(false);
      });
      return unsub;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchLangById = async (lang_id) => {
    try {
      setIsLoading(true);
      const q = query(languageRef, where("languageId", "==", lang_id));

      const unsub = onSnapshot(q, (querySnapshot) => {
        let lang = [];
        querySnapshot.forEach((doc) => {
          lang.push(doc.data());
        });
        setSelectedLanguage(lang[0]);
        console.log(selectedLanguage?.name);
        setIsLoading(false);
      });
      return unsub;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // in future, we can have a list opf chosen languages and select the first index
  // by assigning the first index to the selected language
  const updateLanguage = async (languageId, name) => {
    setIsLoading(true);
    setError(null);

    updateCurrentLanguage({ languageId, name })
      .then(console.log("success"))
      .then(() => {
        router.push("/onboarding/steps");
      })
      .catch((error) => {
        console.log("error adding property"); //
        setError(error.message);
        console.log(error); //
      });
  };

  return {
    fetchLangById,
    fetchCurrentLanguage,
    updateLanguage,
    languages,
    courses,
    currentLanguage,
  };
}
