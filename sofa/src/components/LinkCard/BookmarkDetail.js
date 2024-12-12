  // import React, { useRef, useState, useEffect } from "react";
  // import Button from "../Button/Button";
  // import Dropdown from "../Dropdown/Dropdown";
  // import "./BookmarkDetail.css";
  // import LeftIcon from "../../assets/icon/LeftIcon";
  // import RightIcon from "../../assets/icon/RightIcon";
  // import RemindOnIcon from "../../assets/icon/RemindOnIcon";
  // import RemindOffIcon from "../../assets/icon/RemindOffIcon";
  // import TrashIcon from "../../assets/icon/TrashLineIcon";
  // import CloseIcon from "../../assets/icon/CloseIcon";
  // import DownIcon from "../../assets/icon/DownIcon";
  // import LinkIcon from "../../assets/icon/LinkIcon";
  // import TagAddIcon from "../../assets/icon/TagAddIcon";
  // import {
  //   folderGet,
  //   folderPost,
  //   folderDelete,
  //   folderPut,
  // } from "../../services/folderService";
  // import { linkCardDelete, linkCardGet, linkCardTagPost } from "../../services/linkCardService";
  // import { searchHistoryTagsGet, searchTagsGet } from "../../services/searchService";

  // const BookmarkDetail = ({ bookmark, bookmarks, isOpen, toggleDetail }) => {
  //   const [folderOption, setFolderOption] = useState([]);
  //   const [tagOption, setTagOption] = useState([]);

  //   const [selectedTag, setSelectedTag] = useState("");
  //   const [linkCard, setLinkCard] = useState([]); // 초기값은 빈 배열로 설정
  //   const [recentTagList, setRecentTagList] = useState([]);
  //   const [searchTagList, setSearchTagList] = useState([]);
  //   const TrahslinkCardDelete = async (id) => {
  //     try {
  //       console.log("도착한 id",id);
  //       const response = await linkCardDelete(id);

  //       if (response) {
  //         console.log("TrahslinkCardDelete", response);
  //       }
  //     } catch (error) {
  //       console.error("TrahslinkCardDelete", error);
  //     }
  //   };

  //   const handleAddTagToLinkCard = async (newTag) => {
  //     if (!linkCard.id || !newTag) return; // 링크 카드 ID나 태그가 없으면 실행하지 않음
    
  //     console.log("handleAddTagToLinkCard newTag:", newTag);
  //     try {
  //       // 링크 카드 태그 추가 API 호출
  //       const data = {
  //         "tagList": [
  //           {
  //             "id": newTag.id,
  //             "tagType": newTag.type
  //           }
  //         ]
  //       }
  //       console.log(data);
  //       const response = await linkCardTagPost(linkCard.id, data);
    
  //       if (response) {
  //         const tagData = linkCard.tagList.map((tag) => ({
  //           id: tag.id,
  //           label: tag.name,
  //           content: tag.name,
  //           tagType: tag.tagType,
  //         }));
  //         setTagOption(tagData);
  //         console.log(`링크 카드 ${linkCard.id}에 태그 ${newTag.label} 추가 성공`);
  //       }
  //     } catch (error) {
  //       console.error("링크 카드 태그 추가 실패:", error);
  //     }
  //   };
    
  //   const handleFetchRecentTags = async () => {
  //     try {
  //       const response = await searchHistoryTagsGet(); // 최근 태그 API 호출
  //       console.log("handleFetchRecentTags", response);
  //       if(response) {
  //         const recentData = response.map((recent) => ({
  //           label: recent,
  //           content: recent,
  //           name: recent
  //         }))
  //         setSearchTagList(recentData);
  //       }
  //     } catch (error) {
  //       console.error("Failed to fetch recent tags:", error);
  //     }
  //   };

  //   const handleSearchTags = async (query) => {
  //     try {
  //       const response = await searchTagsGet(query); // 태그 검색 API 호출
  //       console.log("handleSearchTags", response);
  //       if(response) {
  //         const searchData = response.map((search) => ({
  //           id: search.id,
  //           label: search.name,
  //           content: search.name,
  //           name: search.name,
  //           type: search.type
  //         }))
  //         setSearchTagList(searchData);
  //       }
  //     } catch (error) {
  //       console.error("Failed to search tags:", error);
  //       return [];
  //     }
  //   };

  //   const handleAddFolder = async (newFolder) => {
  //     try {
  //       console.log("newFolder",newFolder);
  //       // 새 폴더 생성 요청
  //       const data = {
  //         "name": newFolder
  //       };
  //       const response = await folderPost(data);
    
  //       if (response) {
  //         // 폴더 생성 성공 시 폴더 목록 업데이트
  //         await handleFolderGet();
  //       }
  //     } catch (err) {
  //       console.error("폴더 생성 실패:", err);
  //     }
  //   };

  //   // 현재 북마크의 인덱스
  //   const [currentIndex, setCurrentIndex] = useState(() => {
  //     if (!bookmark || !Array.isArray(bookmarks)) {
  //       return -1; // 초기 값으로 -1 설정
  //     }
  //     return bookmarks.findIndex((item) => item?.id === bookmark?.id);
  //   });
  //   //
  //   const titleRef = useRef(null);
  //   const [values, setValues] = useState({
  //     title: bookmark?.title || "",
  //     summary: bookmark?.summary || "요약 내용입니다",
  //     memo: bookmark?.memo || "메모 내용입니다",
  //   });
  //   const originalValuesRef = useRef({
  //     title: "",
  //     summary: "",
  //     memo: "",
  //   });
  //   const [isEditing, setIsEditing] = useState({
  //     title: false,
  //     summary: false,
  //     memo: false,
  //   });

  //   const [linkcardImg, setLinkcardImg] = useState(""); //링크카드 대표이미지 변수

  //   const handleFolderGet = async () => {
  //     try {
  //       const headers = {};
  //       const response = await folderGet();

  //       if (response && response.folderList) {
  //         // 새롭게 받아온 폴더 리스트를 상태에 저장
  //         const folderData = response.folderList.map((folder) => ({
  //           id: folder.id,
  //           label: folder.name,
  //           content: folder.name,
  //         }));
  //         setFolderOption(folderData);
  //       }
  //       console.log("handleFolderGet 응답:", response);
  //     } catch (err) {
  //       console.log("handleFolderGet 실패!");
  //     } finally {
  //       console.log("handleFolderGet 종료"); // 로딩 상태 종료
  //     }
  //   };
  //   // 임시 데이터 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  //   const [isReminderActive, setIsReminderActive] = useState(false);
  //   const [tagsOpt, setTagsOpt] = useState([
  //     { label: "Documents", content: "Documents" },
  //     { label: "Pictures", content: "Pictures" },
  //     { label: "PICTURES", content: "PICTURES" },
  //     { label: "오잉", content: "오잉" },
  //   ]);
  //   //최근 검색 태그
  //   const [recentTags, setRecentTags] = useState(
  //     ["Documents", "Pictures", "오잉", "웅", "모던웹을위한Javascript"].map(
  //       (item) => ({
  //         label: item,
  //         content: item,
  //       })
  //     )
  //   );
  //   const folderOpt = [
  //     "폴더1",
  //     "오렌지방구는누가꼈나",
  //     "어쩌구",
  //     "컬러버스",
  //     "우와우",
  //   ].map((item) => ({
  //     label: item,
  //     content: item,
  //   }));

  //   // Activates Updating Bookmark
    // useEffect(() => {
    //   if (bookmarks.length > 0 && bookmark) {
    //     // Update ID
    //     const fetchLinkCardGet = async () => {
    //       try {
    //         const response = await linkCardGet(bookmark.id);
      
    //         if (response) {
    //           console.log("API Response:", response);
    //           setLinkCard(response); // 상태 업데이트
    //           console.log(linkCard);

    //         }
    //       } catch (error) {
    //         console.log("fetchLinkCardList error:", error);
    //       }
    //     };
      
    //     fetchLinkCardGet();  
    //   }
    // }, [bookmarks, bookmark]);

  //   useEffect(() => {
  //     if (linkCard) {
  //       console.log("Updated linkCard:", linkCard);
    
  //       const index = bookmarks.findIndex((item) => item.id === linkCard.id);
  //       setCurrentIndex(index);
    
  //       if (linkCard.imageUrl) {
  //         setLinkcardImg(linkCard.imageUrl);
  //       } else {
  //         setLinkcardImg(`${process.env.PUBLIC_URL}/example.png`);
  //       }
    
  //       setValues({
  //         title: linkCard.title || "",
  //         summary: linkCard.summary || "요약 내용입니다.",
  //         memo: linkCard.memo || "메모 내용입니다.",
  //       });

  //       // Update editing state to false when bookmark is loaded
  //       setIsEditing({
  //         title: false,
  //         summary: false,
  //         memo: false,
  //       });
      
  //       // Safe handling for tagList
  //       if (linkCard.tagList && Array.isArray(linkCard.tagList)) {
  //         const tagData = linkCard.tagList.map((tag) => ({
  //           id: tag.id,
  //           label: tag.name,
  //           content: tag.name,
  //           tagType: tag.tagType,
  //         }));
  //         setTagOption(tagData);
  //       } else {
  //         console.log("No tags found in linkCard");
  //         setTagOption([]);
  //       }
  //     }
  //   }, [linkCard, bookmarks]);

  //   useEffect(() => {
  //     console.log("Updated tagOption:", tagOption);
  //   }, [tagOption]);
    
  //   // HEADER BTNS >>>>>>>>>>>>>>>>>>>>>>>>>>>>
  //   const icons = [
  //     { id: "left", Icon: LeftIcon },
  //     { id: "right", Icon: RightIcon },
  //     { id: "trash", Icon: TrashIcon },
  //     { id: "close", Icon: CloseIcon },
  //   ];
  //   const handleIconClick = (id) => {
  //     switch (id) {
  //       case "left":
  //         if (currentIndex > 0) {
  //           const prevBookmark = bookmarks[currentIndex - 1];
  //           setCurrentIndex(currentIndex - 1);
  //           // 북마크 정보 업데이트
  //           setValues((prevValues) => ({
  //             ...prevValues,
  //             title: prevBookmark.title,
  //             summary: prevBookmark.summary,
  //             memo: prevBookmark.memo,
  //           }));
  //         } else {
  //           //❗알림 추가❗
  //         }
  //         break;
  //       case "right":
  //         if (currentIndex < bookmarks.length - 1) {
  //           const nextBookmark = bookmarks[currentIndex + 1];
  //           setCurrentIndex(currentIndex + 1);
  //           // 북마크 정보 업데이트
  //           setValues((nextValues) => ({
  //             ...nextValues,
  //             title: nextBookmark.title,
  //             summary: nextBookmark.summary,
  //             memo: nextBookmark.memo,
  //           }));
  //         } else {
  //           //❗알림 추가❗
  //         }
  //         break;
  //       case "remind":
  //         setIsReminderActive(!isReminderActive);
  //         break;
  //       case "trash":
  //         if (currentIndex < bookmarks.length - 1) {
  //           console.log("현재 id",bookmarks[currentIndex].id);
  //           TrahslinkCardDelete(bookmarks[currentIndex].id);
  //           const nextBookmark = bookmarks[currentIndex + 1];
  //           // ❗북마크 삭제 로직 추가❗
  //           setCurrentIndex(currentIndex + 1);
  //         } else if (currentIndex > 0) {
  //           const prevBookmark = bookmarks[currentIndex - 1];
  //           console.log("Bookmark deleted:", bookmark.id);
  //           setCurrentIndex(currentIndex - 1);
  //         }
  //         break;
  //       case "close":
  //         toggleDetail();
  //         break;
  //       default:
  //         break;
  //     }
  //   };
  //   // <<<<<<<<<<<<<<<<<<<<<<<<<<< HEADER BTNS

  //   // [ TAGS ]
  //   const handleTagDelete = (tagToDelete) => {
  //     setTagOption((prevTags) =>
  //       prevTags.filter((tag) => tag.content !== tagToDelete)
  //     );
  //   };

  //   // Summary, Memo 높이 동적 계산
  //   const useDynamicHeight = (content) => {
  //     const containerRef = useRef(null);
  //     const [containerHeight, setContainerHeight] = useState("auto");

  //     useEffect(() => {
  //       if (containerRef.current) {
  //         const contentHeight = containerRef.current.offsetHeight;
  //         const calculatedHeight = contentHeight;
  //         setContainerHeight(`${calculatedHeight}rem`);
  //       }
  //     }, [content]);

  //     return { containerRef, containerHeight };
  //   };
  //   // 높이 저장용 SummaryRef, MemoRef
  //   const { containerRef: summaryRef, containerHeight: summaryHeight } =
  //     useDynamicHeight(values.summary);
  //   const { containerRef: memoRef, containerHeight: memoHeight } =
  //     useDynamicHeight(values.memo);

  //   // 텍스트 수정 관련 >>>>>>>>>>>>>>>>>>>>>>>>>>>>
  //   //"수정"
  //   const handleEdit = (field) => {
  //     originalValuesRef.current[field] = values[field]; // 수정 전 값을 저장
  //     setIsEditing((prev) => ({ ...prev, [field]: true })); // 해당 필드만 수정 모드로 전환
  //     // focus 설정 (각각의 ref에 대해 focus 처리)
  //     setTimeout(() => {
  //       if (field === "title" && titleRef.current) {
  //         titleRef.current.focus();
  //         titleRef.current.setSelectionRange(
  //           titleRef.current.value.length,
  //           titleRef.current.value.length
  //         );
  //       } else if (field === "summary" && summaryRef.current) {
  //         summaryRef.current.focus();
  //         summaryRef.current.setSelectionRange(
  //           summaryRef.current.value.length,
  //           summaryRef.current.value.length
  //         );
  //       } else if (field === "memo" && memoRef.current) {
  //         memoRef.current.focus();
  //         memoRef.current.setSelectionRange(
  //           memoRef.current.value.length,
  //           memoRef.current.value.length
  //         );
  //       }
  //     }, 0);
  //   };

  //   // "완료"
  //   const handleSave = (field) => {
  //     setIsEditing((prev) => ({ ...prev, [field]: false })); // 수정 모드 종료
  //   };
  //   // "취소"
  //   const handleCancel = (field) => {
  //     setIsEditing((prev) => ({ ...prev, [field]: false })); // 수정 모드 종료
  //     setValues((prev) => ({
  //       ...prev,
  //       [field]: originalValuesRef.current[field],
  //     }));
  //   };
  //   // 각 필드에 대한 value 업데이트
  //   const handleChange = (e, field) => {
  //     setValues((prev) => ({
  //       ...prev,
  //       [field]: e.target.value,
  //     }));
  //   };

  //   //태그..?
  //   const handleSearchSelect = (tag) => {
  //     setSelectedTag(tag);
  //     console.log("선택된 태그:", tag); // 선택된 태그를 처리하는 코드
  //   };

  //   if (!bookmark) return null;

  //   return (
  //     <div className={`bookmark-detail ${isOpen ? "open" : ""}`}>
  //       <div className="header-btn-container">
  //         {icons.map(({ id, Icon }) => (
  //           <Button
  //             className="detail-header-btn"
  //             Icon={Icon}
  //             onClick={() => handleIconClick(id)}
  //           />
  //         ))}
  //       </div>

  //       <div className="detail-header">
  //         <img 
  //           className="detail-image" 
  //           src={bookmark.imageUrl} 
  //           alt={bookmark.title} 
  //           onError={(e) => {
  //             if (e.target.src !== `${process.env.PUBLIC_URL}/example.png`) {
  //               e.target.src = `${process.env.PUBLIC_URL}/example.png`; // 기본 이미지로 대체
  //             }
  //           }}
  //         />
  //         <div className="detail-info">
  //           <div className="row">
  //             <Button
  //               className="detail link-btn"
  //               Icon={LinkIcon}
  //               label="링크 바로가기"
  //               onClick={() =>
  //                 window.open(bookmark.url, "_blank", "noopener noreferrer")
  //               }
  //             />
  //             <Dropdown
  //               className="detail dropdown-folder-select"
  //               type="add"
  //               options={folderOption}
  //               Icon={DownIcon}
  //               label="폴더선택"
  //               onSelect={() => {
  //                 setValues("title");
  //                 //❗추후 수정
  //               }}
  //               onAddValue={handleAddFolder}
  //               onOpen={handleFolderGet}
  //             />
  //           </div>

  //           <div className="detail-title-container">
  //             {isEditing.title ? (
  //               <textarea
  //                 ref={titleRef}
  //                 className="detail-text-input"
  //                 value={values.title}
  //                 onChange={(e) => handleChange(e, "title")}
  //                 onInput={(e) => {
  //                   const target = e.target;
  //                   target.style.height = "4rem"; // 높이를 초기화
  //                   target.style.height = `${target.scrollHeight}px`; // 내용 기반으로 높이 조정
  //                 }}
  //                 onBlur={() => {
  //                   handleCancel("title");
  //                 }}
  //                 onKeyDown={(e) => {
  //                   if (e.key === "Enter") {
  //                     e.preventDefault(); // 기본 동작 방지
  //                     handleSave("title");
  //                   }
  //                 }}
  //               />
  //             ) : (
  //               <span className="detail-title">{values.title}</span>
  //             )}
  //           </div>
  //           {isEditing.title ? (
  //             <div className="detail-edit-buttons">
  //               <Button
  //                 className="detail-cancel"
  //                 label="취소"
  //                 onClick={() => handleCancel("title")}
  //               />
  //               <Button
  //                 className="detail-save"
  //                 label="완료"
  //                 onClick={() => handleSave("title")}
  //               />
  //             </div>
  //           ) : (
  //             <Button
  //               className="detail-edit"
  //               label="수정"
  //               onClick={() => handleEdit("title")}
  //             />
  //           )}
  //         </div>
  //       </div>

  //       <div className="summary-container" style={{ height: summaryHeight }}>
  //         <p>자동 요약</p>
  //         <div className="detail-text-container">
  //           {isEditing.summary ? (
  //             <textarea
  //               ref={summaryRef}
  //               className="detail-text-input"
  //               value={values.summary}
  //               onChange={(e) => handleChange(e, "summary")}
  //               onInput={(e) => {
  //                 const target = e.target;
  //                 target.style.height = "6rem"; // 높이를 초기화
  //                 target.style.height = `${target.scrollHeight}px`; // 내용 기반으로 높이 조정
  //               }}
  //               onBlur={() => {
  //                 handleCancel("summary");
  //               }} // 입력 필드에서 포커스 해제 시 저장
  //               onKeyDown={(e) => {
  //                 if (e.key === "Enter") {
  //                   e.preventDefault(); // 기본 동작 방지
  //                   handleSave("summary");
  //                 }
  //               }}
  //             />
  //           ) : (
  //             <p className="detail-text">{values.summary}</p>
  //           )}
  //         </div>

  //         {isEditing.summary ? (
  //           <div className="detail-edit-buttons">
  //             <Button
  //               className="detail-cancel"
  //               label="취소"
  //               onClick={() => handleCancel("summary")}
  //             />
  //             <Button
  //               className="detail-save"
  //               label="완료"
  //               onClick={() => handleSave("summary")}
  //             />
  //           </div>
  //         ) : (
  //           <Button
  //             className="detail-edit"
  //             label="수정"
  //             onClick={() => handleEdit("summary")}
  //           />
  //         )}
  //       </div>

  //       {/* 메모 */}
  //       <div className="memo-container" style={{ height: memoHeight }}>
  //         <p>메모</p>
  //         <div className="detail-text-container">
  //           {isEditing.memo ? (
  //             <textarea
  //               ref={memoRef}
  //               className="detail-text-input"
  //               value={values.memo}
  //               onChange={(e) => handleChange(e, "memo")}
  //               onInput={(e) => {
  //                 const target = e.target;
  //                 target.style.height = "6rem"; // 높이를 초기화
  //                 target.style.height = `${target.scrollHeight}px`; // 내용 기반으로 높이 조정
  //               }}
  //               onBlur={() => handleCancel("memo")} // 포커스 해제 시 저장
  //               onKeyDown={(e) => {
  //                 if (e.key === "Enter") {
  //                   e.preventDefault(); // 엔터키 기본 동작 방지
  //                   handleSave("memo"); // 수정 완료 처리
  //                 }
  //               }}
  //             />
  //           ) : (
  //             <p className="detail-text">{values.memo}</p>
  //           )}
  //         </div>
  //         {isEditing.memo ? (
  //           <div className="detail-edit-buttons">
  //             <Button
  //               className="detail-cancel"
  //               label="취소"
  //               onClick={() => handleCancel("memo")}
  //             />
  //             <Button
  //               className="detail-save"
  //               label="완료"
  //               onClick={() => handleSave("memo")}
  //             />
  //           </div>
  //         ) : (
  //           <Button
  //             className="detail-edit"
  //             label="수정"
  //             onClick={() => handleEdit("memo")}
  //           />
  //         )}
  //       </div>
  //       {/* 태그 */}
  //       <div className="detail-tags">
  //         <p>태그</p>
  //         <div className="tags-container">
  //           {tagOption.map((tag) => (
  //             <span key={tag.label}>
  //               <Button
  //                 className="tag"
  //                 label={tag.label}
  //                 option={tag} // 태그 정보를 option으로 전달
  //                 onDelete={handleTagDelete} // 삭제 함수 전달
  //               />
  //             </span>
  //           ))}
  //         </div>
  //         {tagOption.length < 5 && (
  //           <Dropdown
  //             className="detail-tag"
  //             type="tag"
  //             options={searchTagList}
  //             recentTags={recentTags}
  //             Icon={TagAddIcon}
  //             onSelect={(selected) => {
  //               setTagOption((prev) => [...prev, selected]); // 선택된 태그 추가
  //             }}
  //             onSearchSelect={handleSearchTags} // 검색 시 호출
  //             onOpen={(handleFetchRecentTags)}
  //             setTagOption={setTagOption} // 태그 목록을 업데이트하는 함수 전달
  //             linkCardId={linkCard?.id} // linkCard의 ID 전달
  //             onAddValue={handleAddTagToLinkCard} // 태그 추가 로직 전달
  //           />
  //         )}
  //       </div>
  //     </div>
  //   );
  // };

  // export default BookmarkDetail;

  import React, { useRef, useState, useEffect } from "react";
  import Button from "../Button/Button";
  import Dropdown from "../Dropdown/Dropdown";

  import "./BookmarkDetail.css";
  import LeftIcon from "../../assets/icon/LeftIcon";
  import RightIcon from "../../assets/icon/RightIcon";
  import RemindOnIcon from "../../assets/icon/RemindOnIcon";
  import RemindOffIcon from "../../assets/icon/RemindOffIcon";
  import TrashIcon from "../../assets/icon/TrashLineIcon";
  import CloseIcon from "../../assets/icon/CloseIcon";
  import DownIcon from "../../assets/icon/DownIcon";
  import LinkIcon from "../../assets/icon/LinkIcon";
  import TagAddIcon from "../../assets/icon/TagAddIcon";
  import {
    folderGet,
    folderPost,
    folderDelete,
    folderPut,
  } from "../../services/folderService";
  import { linkCardDelete, linkCardGet, linkCardTagPost } from "../../services/linkCardService";
  import { searchHistoryTagsGet, searchTagsGet } from "../../services/searchService";

  const BookmarkDetail = ({ bookmark, bookmarks, isOpen, toggleDetail }) => {
    const [folderOption, setFolderOption] = useState([]);
    const [tagOption, setTagOption] = useState([]);

    const [selectedTag, setSelectedTag] = useState("");
    const [linkCard, setLinkCard] = useState([]); // 초기값은 빈 배열로 설정
    const [recentTagList, setRecentTagList] = useState([]);
    const [searchTagList, setSearchTagList] = useState([]);

    const TrahslinkCardDelete = async (id) => {
      try {
        console.log("도착한 id",id);
        const response = await linkCardDelete(id);

        if (response) {
          console.log("TrahslinkCardDelete", response);
        }
      } catch (error) {
        console.error("TrahslinkCardDelete", error);
      }
    };

    const handleAddTagToLinkCard = async (newTag) => {
      if (!linkCard.id || !newTag) return; // 링크 카드 ID나 태그가 없으면 실행하지 않음
    
      console.log("handleAddTagToLinkCard newTag:", newTag);
      try {
        // 링크 카드 태그 추가 API 호출
        const data = {
          "tagList": [
            {
              "id": newTag.id,
              "tagType": newTag.type
            }
          ]
        }
        console.log(data);
        const response = await linkCardTagPost(linkCard.id, data);
    
        if (response) {
          const tagData = linkCard.tagList.map((tag) => ({
            id: tag.id,
            label: tag.name,
            content: tag.name,
            tagType: tag.tagType,
          }));
          setTagOption(tagData);
          console.log(`링크 카드 ${linkCard.id}에 태그 ${newTag.label} 추가 성공`);
        }
      } catch (error) {
        console.error("링크 카드 태그 추가 실패:", error);
      }
    };
    
    const handleFetchRecentTags = async () => {
      try {
        const response = await searchHistoryTagsGet(); // 최근 태그 API 호출
        console.log("handleFetchRecentTags", response);
        if(response) {
          const recentData = response.map((recent) => ({
            label: recent,
            content: recent,
            name: recent
          }))
          setSearchTagList(recentData);
        }
      } catch (error) {
        console.error("Failed to fetch recent tags:", error);
      }
    };

    const handleSearchTags = async (query) => {
      try {
        const response = await searchTagsGet(query); // 태그 검색 API 호출
        console.log("handleSearchTags", response);
        if(response) {
          const searchData = response.map((search) => ({
            id: search.id,
            label: search.name,
            content: search.name,
            name: search.name,
            type: search.type
          }))
          setSearchTagList(searchData);
        }
      } catch (error) {
        console.error("Failed to search tags:", error);
        return [];
      }
    };

    const handleAddFolder = async (newFolder) => {
      try {
        console.log("newFolder",newFolder);
        // 새 폴더 생성 요청
        const data = {
          "name": newFolder
        };
        const response = await folderPost(data);
    
        if (response) {
          // 폴더 생성 성공 시 폴더 목록 업데이트
          await handleFolderGet();
        }
      } catch (err) {
        console.error("폴더 생성 실패:", err);
      }
    };

    // 현재 북마크의 인덱스
    const [currentIndex, setCurrentIndex] = useState(() => {
      if (!bookmark || !Array.isArray(bookmarks)) {
        return -1; // 초기 값으로 -1 설정
      }
      return bookmarks.findIndex((item) => item?.id === bookmark?.id);
    });
    //
    const titleRef = useRef(null);
    const [values, setValues] = useState({
      title: bookmark?.title || "",
      summary: bookmark?.summary || "요약 내용입니다",
      memo: bookmark?.memo || "메모 내용입니다",
    });
    const originalValuesRef = useRef({
      title: "",
      summary: "",
      memo: "",
    });
    const [isEditing, setIsEditing] = useState({
      title: false,
      summary: false,
      memo: false,
    });

    const [linkcardImg, setLinkcardImg] = useState(""); //링크카드 대표이미지 변수

    const handleFolderGet = async () => {
      try {
        const headers = {};
        const response = await folderGet();

        if (response && response.folderList) {
          // 새롭게 받아온 폴더 리스트를 상태에 저장
          const folderData = response.folderList.map((folder) => ({
            id: folder.id,
            label: folder.name,
            content: folder.name,
          }));
          setFolderOption(folderData);
        }
        console.log("handleFolderGet 응답:", response);
      } catch (err) {
        console.log("handleFolderGet 실패!");
      } finally {
        console.log("handleFolderGet 종료"); // 로딩 상태 종료
      }
    };
    // 임시 데이터 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    const [isReminderActive, setIsReminderActive] = useState(false);
    const [tagsOpt, setTagsOpt] = useState([
      { label: "Documents", content: "Documents" },
      { label: "Pictures", content: "Pictures" },
      { label: "PICTURES", content: "PICTURES" },
      { label: "오잉", content: "오잉" },
    ]);
    //최근 검색 태그
    const [recentTags, setRecentTags] = useState(
      ["Documents", "Pictures", "오잉", "웅", "모던웹을위한Javascript"].map(
        (item) => ({
          label: item,
          content: item,
        })
      )
    );
    const folderOpt = [
      "폴더1",
      "오렌지방구는누가꼈나",
      "어쩌구",
      "컬러버스",
      "우와우",
    ].map((item) => ({
      label: item,
      content: item,
    }));

    // Activates Updating Bookmark
    useEffect(() => {
      if (bookmarks.length > 0 && bookmark) {
        // Update ID
        const fetchLinkCardGet = async () => {
          try {
            const response = await linkCardGet(bookmark.id);
      
            if (response) {
              console.log("API Response:", response);
              setLinkCard(response); // 상태 업데이트
              console.log(linkCard);

            }
          } catch (error) {
            console.log("fetchLinkCardList error:", error);
          }
        };
      
        fetchLinkCardGet();  
      }
    }, [bookmarks, bookmark]);

    useEffect(() => {
      if (linkCard) {
        console.log("Updated linkCard:", linkCard);
    
        const index = bookmarks.findIndex((item) => item.id === linkCard.id);
        setCurrentIndex(index);
    
        if (linkCard.imageUrl) {
          setLinkcardImg(linkCard.imageUrl);
        } else {
          setLinkcardImg(`${process.env.PUBLIC_URL}/example.png`);
        }
    
        setValues({
          title: linkCard.title || "",
          summary: linkCard.summary || "요약 내용입니다.",
          memo: linkCard.memo || "메모 내용입니다.",
        });

        // Update editing state to false when bookmark is loaded
        setIsEditing({
          title: false,
          summary: false,
          memo: false,
        });
      
        // Safe handling for tagList
        if (linkCard.tagList && Array.isArray(linkCard.tagList)) {
          const tagData = linkCard.tagList.map((tag) => ({
            id: tag.id,
            label: tag.name,
            content: tag.name,
            tagType: tag.tagType,
          }));
          setTagOption(tagData);
        } else {
          console.log("No tags found in linkCard");
          setTagOption([]);
        }
      }
    }, [linkCard, bookmarks]);

    useEffect(() => {
      console.log("Updated tagOption:", tagOption);
    }, [tagOption]);
    
    useEffect(()=> {
      setValues({
        title: "프론트 개발자의 CORS 에러 대응법",
        summary: "CORS(Cross-Origin Resource Sharing)는 웹 어플리케이션에서 다른 도메인의 리소스에 접근할 때 발생하는 보안 이슈를 해결하는 표준 방법이다. CORS 에러를 해결하기 위해 서버 측에서 설정을 해야 하지만, 프론트 개발자도 withCredentials 옵션을 추가하여 처리할 수 있다. HTTPS에서 HTTP로 요청하거나 CDN을 사용할 때 CORS 에러가 발생할 수 있으며, 크롬을 보안 해제 모드로 실행하여 CORS 에러를 무시할 수도 있다. 결론적으로, CORS 에러를 처리하려면 서버와 프론트에서 협력해야 하며 전반적인 웹보안을 고려해야 한다. ",
        memo: "CORS관련 오류해결 메모", // 기본 메모 추가
      })
      setTagOption([
        {
          id: 'bJtRCV9n2j7P5_nUVNinbw==', 
          label: 'CORS',
          content: 'CORS',
          tagType: 'AI'
        },
        {
          id: 'O9z9-b7gldXqjKCESXcwvQ==',
          label: '보안',
          content: '보안',
          tagType: 'AI'
        },
        {
          id: 'gEKihwVefYy9AIZ4kNNbhg==', 
          label: '프론트-end',
          content: '프론트-end',
          tagType: 'AI'
        },
        {
          id: 'gEKihwVefYy9AIZ4kNNbhg==', 
          label: '크로스오리진',
          content: '크로스오리진',
          tagType: 'AI'
        },
      ]);
    }, []);
    // HEADER BTNS >>>>>>>>>>>>>>>>>>>>>>>>>>>>
    const icons = [
      { id: "left", Icon: LeftIcon },
      { id: "right", Icon: RightIcon },
      { id: "trash", Icon: TrashIcon },
      { id: "close", Icon: CloseIcon },
    ];
    const handleIconClick = (id) => {
      switch (id) {
        case "left":
          if (currentIndex > 0) {
            const prevBookmark = bookmarks[currentIndex - 1];
            setCurrentIndex(currentIndex - 1);
            // 북마크 정보 업데이트
            setValues((prevValues) => ({
              ...prevValues,
              title: prevBookmark.title,
              summary: prevBookmark.summary,
              memo: prevBookmark.memo,
            }));
          } else {
            //❗알림 추가❗
          }
          break;
        case "right":
          if (currentIndex < bookmarks.length - 1) {
            const nextBookmark = bookmarks[currentIndex + 1];
            setCurrentIndex(currentIndex + 1);
            // 북마크 정보 업데이트
            setValues((nextValues) => ({
              ...nextValues,
              title: nextBookmark.title,
              summary: nextBookmark.summary,
              memo: nextBookmark.memo,
            }));
          } else {
            //❗알림 추가❗
          }
          break;
        case "remind":
          setIsReminderActive(!isReminderActive);
          break;
        case "trash":
          if (currentIndex < bookmarks.length - 1) {
            console.log("현재 id",bookmarks[currentIndex].id);
            TrahslinkCardDelete(bookmarks[currentIndex].id);
            const nextBookmark = bookmarks[currentIndex + 1];
            // ❗북마크 삭제 로직 추가❗
            setCurrentIndex(currentIndex + 1);
          } else if (currentIndex > 0) {
            const prevBookmark = bookmarks[currentIndex - 1];
            console.log("Bookmark deleted:", bookmark.id);
            setCurrentIndex(currentIndex - 1);
          }
          break;
        case "close":
          toggleDetail();
          break;
        default:
          break;
      }
    };
    // <<<<<<<<<<<<<<<<<<<<<<<<<<< HEADER BTNS

    // [ TAGS ]
    const handleTagDelete = (tagToDelete) => {
      setTagOption((prevTags) =>
        prevTags.filter((tag) => tag.content !== tagToDelete)
      );
    };

    // Summary, Memo 높이 동적 계산
    const useDynamicHeight = (content) => {
      const containerRef = useRef(null);
      const [containerHeight, setContainerHeight] = useState("auto");

      useEffect(() => {
        if (containerRef.current) {
          const contentHeight = containerRef.current.offsetHeight;
          const calculatedHeight = contentHeight;
          setContainerHeight(`${calculatedHeight}rem`);
        }
      }, [content]);

      return { containerRef, containerHeight };
    };
    // 높이 저장용 SummaryRef, MemoRef
    const { containerRef: summaryRef, containerHeight: summaryHeight } =
      useDynamicHeight(values.summary);
    const { containerRef: memoRef, containerHeight: memoHeight } =
      useDynamicHeight(values.memo);

    // 텍스트 수정 관련 >>>>>>>>>>>>>>>>>>>>>>>>>>>>
    //"수정"
    const handleEdit = (field) => {
      originalValuesRef.current[field] = values[field]; // 수정 전 값을 저장
      setIsEditing((prev) => ({ ...prev, [field]: true })); // 해당 필드만 수정 모드로 전환
      // focus 설정 (각각의 ref에 대해 focus 처리)
      setTimeout(() => {
        if (field === "title" && titleRef.current) {
          titleRef.current.focus();
          titleRef.current.setSelectionRange(
            titleRef.current.value.length,
            titleRef.current.value.length
          );
        } else if (field === "summary" && summaryRef.current) {
          summaryRef.current.focus();
          summaryRef.current.setSelectionRange(
            summaryRef.current.value.length,
            summaryRef.current.value.length
          );
        } else if (field === "memo" && memoRef.current) {
          memoRef.current.focus();
          memoRef.current.setSelectionRange(
            memoRef.current.value.length,
            memoRef.current.value.length
          );
        }
      }, 0);
    };

    // "완료"
    const handleSave = (field) => {
      setIsEditing((prev) => ({ ...prev, [field]: false })); // 수정 모드 종료
    };
    // "취소"
    const handleCancel = (field) => {
      setIsEditing((prev) => ({ ...prev, [field]: false })); // 수정 모드 종료
      setValues((prev) => ({
        ...prev,
        [field]: originalValuesRef.current[field],
      }));
    };
    // 각 필드에 대한 value 업데이트
    const handleChange = (e, field) => {
      setValues((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

    //태그..?
    const handleSearchSelect = (tag) => {
      setSelectedTag(tag);
      console.log("선택된 태그:", tag); // 선택된 태그를 처리하는 코드
    };

    if (!bookmark) return null;



    return (
      <div className={`bookmark-detail ${isOpen ? "open" : ""}`}>
        <div className="header-btn-container">
          {icons.map(({ id, Icon }) => (
            <Button
              className="detail-header-btn"
              Icon={Icon}
              onClick={() => handleIconClick(id)}
            />
          ))}
        </div>

        <div className="detail-header">
          <img 
            className="detail-image" 
            src={bookmark.imageUrl} 
            alt={bookmark.title} 
            onError={(e) => {
              if (e.target.src !== `${process.env.PUBLIC_URL}/example.png`) {
                e.target.src = `${process.env.PUBLIC_URL}/example.png`; // 기본 이미지로 대체
              }
            }}
          />
          <div className="detail-info">
            <div className="row">
              <Button
                className="detail link-btn"
                Icon={LinkIcon}
                label="링크 바로가기"
                onClick={() =>
                  window.open(bookmark.url, "_blank", "noopener noreferrer")
                }
              />
              <Dropdown
                className="detail dropdown-folder-select"
                type="add"
                options={folderOption}
                Icon={DownIcon}
                label="프론트엔드"
                onSelect={() => {
                  setValues("title");
                  //❗추후 수정
                }}
                onAddValue={handleAddFolder}
                onOpen={handleFolderGet}
              />
            </div>

            <div className="detail-title-container">
              {isEditing.title ? (
                <textarea
                  ref={titleRef}
                  className="detail-text-input"
                  value={values.title}
                  onChange={(e) => handleChange(e, "title")}
                  onInput={(e) => {
                    const target = e.target;
                    target.style.height = "4rem"; // 높이를 초기화
                    target.style.height = `${target.scrollHeight}px`; // 내용 기반으로 높이 조정
                  }}
                  onBlur={() => {
                    handleCancel("title");
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault(); // 기본 동작 방지
                      handleSave("title");
                    }
                  }}
                />
              ) : (
                <span className="detail-title">{values.title}</span>
              )}
            </div>
            {isEditing.title ? (
              <div className="detail-edit-buttons">
                <Button
                  className="detail-cancel"
                  label="취소"
                  onClick={() => handleCancel("title")}
                />
                <Button
                  className="detail-save"
                  label="완료"
                  onClick={() => handleSave("title")}
                />
              </div>
            ) : (
              <Button
                className="detail-edit"
                label="수정"
                onClick={() => handleEdit("title")}
              />
            )}
          </div>
        </div>

        <div className="summary-container" style={{ height: summaryHeight }}>
          <p>자동 요약</p>
          <div className="detail-text-container">
            {isEditing.summary ? (
              <textarea
                ref={summaryRef}
                className="detail-text-input"
                value={values.summary}
                onChange={(e) => handleChange(e, "summary")}
                onInput={(e) => {
                  const target = e.target;
                  target.style.height = "6rem"; // 높이를 초기화
                  target.style.height = `${target.scrollHeight}px`; // 내용 기반으로 높이 조정
                }}
                onBlur={() => {
                  handleCancel("summary");
                }} // 입력 필드에서 포커스 해제 시 저장
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault(); // 기본 동작 방지
                    handleSave("summary");
                  }
                }}
              />
            ) : (
              <p className="detail-text">{values.summary}</p>
            )}
          </div>

          {isEditing.summary ? (
            <div className="detail-edit-buttons">
              <Button
                className="detail-cancel"
                label="취소"
                onClick={() => handleCancel("summary")}
              />
              <Button
                className="detail-save"
                label="완료"
                onClick={() => handleSave("summary")}
              />
            </div>
          ) : (
            <Button
              className="detail-edit"
              label="수정"
              onClick={() => handleEdit("summary")}
            />
          )}
        </div>

        {/* 메모 */}
        <div className="memo-container" style={{ height: memoHeight }}>
          <p>메모</p>
          <div className="detail-text-container">
            {isEditing.memo ? (
              <textarea
                ref={memoRef}
                className="detail-text-input"
                value={values.memo}
                onChange={(e) => handleChange(e, "memo")}
                onInput={(e) => {
                  const target = e.target;
                  target.style.height = "6rem"; // 높이를 초기화
                  target.style.height = `${target.scrollHeight}px`; // 내용 기반으로 높이 조정
                }}
                onBlur={() => handleCancel("memo")} // 포커스 해제 시 저장
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault(); // 엔터키 기본 동작 방지
                    handleSave("memo"); // 수정 완료 처리
                  }
                }}
              />
            ) : (
              <p className="detail-text">{values.memo}</p>
            )}
          </div>
          {isEditing.memo ? (
            <div className="detail-edit-buttons">
              <Button
                className="detail-cancel"
                label="취소"
                onClick={() => handleCancel("memo")}
              />
              <Button
                className="detail-save"
                label="완료"
                onClick={() => handleSave("memo")}
              />
            </div>
          ) : (
            <Button
              className="detail-edit"
              label="수정"
              onClick={() => handleEdit("memo")}
            />
          )}
        </div>

        {/* 태그 */}
        <div className="detail-tags">
          <p>태그</p>
          <div className="tags-container">
            {tagOption.map((tag) => (
              <span key={tag.label}>
                <Button
                  className="tag"
                  label={tag.label}
                  option={tag} // 태그 정보를 option으로 전달
                  onDelete={handleTagDelete} // 삭제 함수 전달
                />
              </span>
            ))}
          </div>
          {tagOption.length < 5 && (
            <Dropdown
              className="detail-tag"
              type="tag"
              options={searchTagList}
              recentTags={recentTags}
              Icon={TagAddIcon}
              onSelect={(selected) => {
                setTagOption((prev) => [...prev, selected]); // 선택된 태그 추가
              }}
              onSearchSelect={handleSearchTags} // 검색 시 호출
              onOpen={(handleFetchRecentTags)}
              setTagOption={setTagOption} // 태그 목록을 업데이트하는 함수 전달
              linkCardId={linkCard?.id} // linkCard의 ID 전달
              onAddValue={handleAddTagToLinkCard} // 태그 추가 로직 전달
            />
          )}
        </div>
      </div>
    );
  };

  export default BookmarkDetail;