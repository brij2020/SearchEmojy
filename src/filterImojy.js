import emojiList from './emojiList.json';
export default function filterEmojy(searchText,maxResult) {
    return emojiList.filter((emojy)=>{
        if(emojy.title.toLocaleLowerCase().includes(searchText)) {
            return true
        } 

        if(emojy.keywords.includes(searchText)) {
            return true;
        }
        return false;
    })
    .slice(0,maxResult);
}