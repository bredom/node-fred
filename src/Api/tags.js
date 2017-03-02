'use strict';
import api from '../api';
import TagsBuilder from './Builders/tagsBuilder';

class Tags {
    constructor(apiKey, returnType) {
        this.apiKey = apiKey;
        this.returnType = returnType;
        this.tagsBuilder = new TagsBuilder();
    }

    /**
     * Gets all tags, search for tags, or get tags by name.
     * @param {Object} params
     * @returns {Promise} Resolves with a set of tags or errors out
     */
    getAllTags(params = {}) {
        return new Promise((resolve, reject) => {
            try {
                const url = this.tagsBuilder
                    .setAPIKey(this.apiKey)
                    .setFileType(this.returnType)
                    .setRealTimeStart(params)
                    .setRealTimeEnd(params)
                    .setLimit(params)
                    .setOffset(params)
                    .setOrderBy(params)
                    .setSortOrder(params)
                    .setTagNames(params)
                    .setTagGroupId(params)
                    .setSearchText(params)
                    .getUrl();

                api.get('tags?' + url)
                    .then((res) => {
                        resolve(res.data);
                    })
                    .catch((err) => {
                        reject(err.response.data);
                    });
            } catch(e) {
                reject(e);
            }
        });
    }

    /**
     * Get the related tags for one or more tags.
     * @param {Object} params
     * @returns {Promise} Resolves with the related tags for one or more tags or errors out
     */
    getAllRelatedTags(params = {}) {
        return new Promise((resolve, reject) => {
            try {
                const url = this.tagsBuilder
                    .setAPIKey(this.apiKey)
                    .setFileType(this.returnType)
                    .setRealTimeStart(params)
                    .setRealTimeEnd(params)
                    .setLimit(params)
                    .setOffset(params)
                    .setOrderBy(params)
                    .setSortOrder(params)
                    .setTagNames(params)
                    .setExcludeTagNames(params)
                    .setTagGroupId(params)
                    .setSearchText(params)
                    .getUrl();

                api.get('related_tags?' + url)
                    .then((res) => {
                        resolve(res.data);
                    })
                    .catch((err) => {
                        reject(err.response.data);
                    });
            } catch(e) {
                reject(e);
            }
        });
    }

    /**
     * Gets the series matching tags.
     * @param {string} tagNames
     * @param {Object} params
     * @returns {Promise} Resolves with the series matching tags or errors out
     */
    getAllSeriesMatchingTags(tagNames, params = {}) {
        return new Promise((resolve, reject) => {
            try {
                const url = this.tagsBuilder
                    .setAPIKey(this.apiKey)
                    .setFileType(this.returnType)
                    .setRealTimeStart(params)
                    .setRealTimeEnd(params)
                    .setLimit(params)
                    .setOffset(params)
                    .setOrderBy(params)
                    .setSortOrder(params)
                    .setTagNames({'tag_names': tagNames})
                    .setExcludeTagNames(params)
                    .getUrl();

                api.get('tags/series?' + url)
                    .then((res) => {
                        resolve(res.data);
                    })
                    .catch((err) => {
                        reject(err.response.data);
                    });
            } catch(e) {
                reject(e);
            }
        });
    }
}

export default Tags;
