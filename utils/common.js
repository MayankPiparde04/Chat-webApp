export const getRoomId = (userId1, UserId2) => {
    const sortedIds = [userId1, UserId2].sort();
    const roomId = sortedIds.join('-');
    return roomId;
}


export const formatDate = (date) => {
    const day = date.getDate();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[date.getMonth()];

    const formattedDate = day +' '+ month;
    return formattedDate;
};
