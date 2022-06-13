import { FormEvent, useRef, useState } from "react"
import ReactModal from "react-modal"
import { FormModal } from "../../../components/shared/FormModal"
import { LoadingSpinner } from "../../../components/shared/LoadingSpinner"
import { SubmitBtn } from "../../../components/shared/SubmitBtn"
import { EEndpoints } from "../../../enums/endpoints"
import { modalStyles } from "../../../helpers/modalStyles"
import { useAppDispatch, useAppSelector } from "../../../hooks/redux"
import { imgDelete, usePost } from "../../../hooks/useFetch"
import { getCompany } from "../../../store/reducers/ActionCreators"
import styles from "./Images.module.scss"

export function Images() {
  const dispatch = useAppDispatch()
  const {company, error, isLoading} = useAppSelector(store => store.companyReducer)
  if(isLoading) return <LoadingSpinner />
  const [isImgOpen, setIsImageOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fetchError, setFetchError] = useState(false);
  const imgEl = useRef<any>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log()
    const formData = new FormData();
    formData.set('file', e.currentTarget.file.files[0])
    const [res] = await usePost(formData, EEndpoints.companies);
    if (res.status === 200) {
      dispatch(getCompany)
      setIsModalOpen(false);
      setFetchError(false);
    } else {
      setFetchError(true)
    }
  }


  return (
    <>
      <h3>Приложенные фото</h3>
      <div className={styles.container}>
        {
          company.photos.map(item => (
            <div className={styles.wrp}>
              <img src={item.thumbpath} key={item.name} data-path={item.filepath} onClick={() => setIsImageOpen(true)} ref={imgEl}/>
              <button className={styles.closeBtn} onClick={() => imgDelete(item.name)}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="20" height="20" rx="10" fill="#D95151" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M5.19995 6.07226L9.1277 10L5.19995 13.9278L6.0722 14.8L9.99995 10.8723L13.9277 14.8L14.8 13.9278L10.8722 10L14.8 6.07226L13.9277 5.20001L9.99995 9.12776L6.0722 5.20001L5.19995 6.07226Z" fill="#F7F7F7" />
                </svg>
              </button>
              <span className={styles.name}>{item.name}</span>
            </div>
          ))
        }
      </div>
      <SubmitBtn handleClick={()=>setIsModalOpen(true)} title="добавить изображение"/>
      <ReactModal isOpen={isImgOpen} ariaHideApp={false} style={modalStyles} onRequestClose={() => {setIsImageOpen(false)}}>
        {imgEl.current && <img src={imgEl.current.dataset.path}/>}
      </ReactModal>
      <FormModal
        handleSubmit={handleSubmit}
        isModalOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        error={fetchError}
      >
        <input type="file" name="file" accept="image/png, image/jpeg"/>
      </FormModal>
    </>
  )
}