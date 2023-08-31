/* eslint-disable no-empty */
import { useState, useEffect } from 'react'
import moment from 'moment'
import { message } from 'antd'
import imageCompression from 'browser-image-compression'
import { uploadImageApi } from '../../apis/uploadImageApis'
import ErrorMessage from '../websiteManager/errorImage'

const options = {
  maxSizeMB: 5, // Giới hạn kích thước tối đa của ảnh sau khi nén (5MB ở đây)
  maxWidthOrHeight: 800, // Giới hạn chiều rộng hoặc chiều cao tối đa sau khi nén (800px ở đây)
  useWebWorker: true, // Sử dụng Web Worker để nén ảnh (tùy chọn)
}

const UploadImageComponent = ({
  imageUrl: imageUrlProps, isEditing, setImage, validate,
}) => {
  const [imageUrl, setImageUrl] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setImageUrl(imageUrlProps)
  }, [imageUrlProps])

  const handleFileChange = async (e) => {
    const file = e.target.files[0]
    if (file.type !== 'image/png' && file.type !== 'image/jpeg') {
      message.error('Chỉ chấp nhận file PNG và JPEG')
      return
    }
    try {
      setLoading(true)
      const formData = new FormData()
      const compressedImage = await imageCompression(file, options)
      formData.append('file', compressedImage)

      const response = await uploadImageApi(formData)
      console.log(1, response)
      const url = response?.data?.data
      if (url) {
        setImageUrl(url)
        setImage(url)
        message.success('Upload ảnh thành công!')
      } else {
        message.error('Upload ảnh thất bại!')
      }
    } catch (error) {
      console.log(2, error)

      message.error('Upload ảnh thất bại!')
    } finally {
      setLoading(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file.type !== 'image/png' && file.type !== 'image/jpeg') {
      message.error('Chỉ chấp nhận file PNG và JPEG')
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const handleClickSelectFile = () => {
    const input = document.getElementById('select-image')
    if (input) {
      input.value = ''
      input.click()
    }
  }

  return (
    <>
      {
      imageUrl
        ? (
          <div className="image-component">
            {
              isEditing
              && (
              <div className="choose-image-layer">
                <div className="camera-icon" role="presentation" onClick={handleClickSelectFile}>
                  <img alt="camera-icon" src="/images/common/camera.svg" />
                </div>
                <input
                  id="select-image" type="file" accept=".png,.jpeg,.jpg"
                  onChange={handleFileChange} style={{ display: 'none' }}
                />
              </div>
              )
            }
            <img className="image-comp-main" src={imageUrl} alt="imageUrl" />
          </div>
        )
        : (
          <div className="drag-file-comp">
            <div
              className="drag-file"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              style={{ border: !validate ? '1px solid #ff4d4f' : '1px dashed #e8e8e8' }}
            >
              <input
                id="select-image" type="file" accept=".png,.jpeg,.jpg"
                onChange={handleFileChange} style={{ display: 'none' }}
              />
              <button type="button" className="btn btn-select-file" onClick={handleClickSelectFile}>Select Files</button>
              <div className="text-drop">
                <img src="/images/common/upload.svg" alt="upload" />
                Drop image here...
              </div>
            </div>
            <ErrorMessage text="Vui lòng tải ảnh lên" isShow={!validate} />

          </div>
        )
    }
    </>
  )
}

export default UploadImageComponent
