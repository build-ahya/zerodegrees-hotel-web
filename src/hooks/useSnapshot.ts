import { db } from "@/lib/firebase";
import Content from "@/models/content";
import {
  DocumentData,
  QuerySnapshot,
  collection,
  onSnapshot,
} from "firebase/firestore";
import { useEffect, useState } from "react";

export default function useSnapshot() {
  const [data, setData] = useState<null | Content>(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "/content"),
      (snapshot: QuerySnapshot<DocumentData, DocumentData>) => {
        if (!snapshot.empty) {
          snapshot.forEach((doc) => {
            setData((prev) => ({ ...(prev as Content), [doc.id]: doc.data() }));
          });
        }
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  return data;
}
