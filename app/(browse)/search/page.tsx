import { redirect } from "next/navigation";
import { Results } from "./_components/results";
import { Suspense } from "react";
import { ResultSkeleton } from "../(home)/_components/results";

interface SearchPageProps{
    searchParams:{
        term?: string
    }
}
const SearchPage = ({searchParams}:SearchPageProps) => {

    if(!searchParams.term){
        redirect("/")
    }
    
    return ( 
        <div className="h-full p-8 max-w-screen-2xl mx-auto">
            <Suspense fallback={<ResultSkeleton />}>
            <Results term={searchParams.term}/>
            </Suspense>
        </div>     
        );
}
 
export default SearchPage;