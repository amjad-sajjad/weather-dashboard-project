import heartIcon from '../../assets/heart.svg'
// eslint-disable-next-line react/prop-types
const Favourite = ({onShow}) => {
    return (
        <div className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all" onClick={onShow}>
            <img src={heartIcon} alt="" />
            <span>Favourite Locations</span>
        </div>
    );
};

export default Favourite;