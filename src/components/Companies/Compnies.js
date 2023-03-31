import withDataAndLoader from '../../Hoc/withDataAndLoader';
import useFetch from '../../Hooks/useFetch';
import { COMPANIES_URL } from '../../utils/Endpoints';

function Companies() {
    const data = useFetch(COMPANIES_URL)
    return(
        <div>
            <h1>Companies ({data?.length})</h1>

            <div>
                {
                    data.map((company,index) => {
                        return <div key={index}>
                            <h3>{company.empName}</h3>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default withDataAndLoader(Companies);