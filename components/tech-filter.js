import { useDispatch } from "react-redux";
import { addFilters, removeFilters } from "../redux/projectsSlice";

export default function TechFilter({ title, slug }) {

    const dispatch = useDispatch();

    const handleChange = (slug) => {
        const techChecked = document.querySelector(`#${slug}`).checked;
        if (techChecked) {
            dispatch(addFilters({ slug }))
        }
        else {
            dispatch(removeFilters({ slug }))
        }
    }

    return (
        <div className="tag">
            <label>
                <input type="checkbox" name={slug} id={slug} onChange={() => handleChange(slug)} /><span>{title}</span>
            </label>
        </div>
    );
}